'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './HeroBackgroundAnimation.module.css';

const Blob = ({ className }: { className: string }) => (
  <div className={`${styles.blob} ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39.0597 66.1375C20.9375 69.3134 3.67919 57.1937 0.503362 39.0686C-2.66389 20.9492 9.4444 3.67948 27.5695 0.50365C45.7004 -2.66646 62.9586 9.45893 66.1287 27.5755C69.3074 45.7063 57.1877 62.9674 39.0597 66.1375Z" fill="url(#paint0_radial_blob)"/>
      <defs>
        <radialGradient id="paint0_radial_blob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(33.3169 33.3196) rotate(80.0667) scale(33.3136 33.3136)">
          <stop offset="0.7443" stopColor="#001209"/>
          <stop offset="0.7896" stopColor="#00180E"/>
          <stop offset="0.8499" stopColor="#00291A"/>
          <stop offset="0.8903" stopColor="#003826"/>
          <stop offset="0.8976" stopColor="#01402C"/>
          <stop offset="0.9463" stopColor="#056F4F"/>
          <stop offset="1"/>
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const DARK = { r: 8, g: 24, b: 33 };
const GREEN = { r: 5, g: 190, b: 130 };
const CONNECT_DISTANCE = 250;
const MOUSE_RADIUS = 170;
const MOBILE_QUERY = '(max-width: 768px)';
const MOBILE_BLOB_COUNT = 20;
const DESKTOP_BLOB_COUNT = 50;

// Matches the old diagonal "to top right" mask: bright green in the
// bottom-left/top-right corners, fading to the dark tone in the middle band.
function diagonalGreenFactor(nx: number, ny: number) {
  const t = (nx + (1 - ny)) / 2;
  if (t <= 0.2 || t >= 0.8) return 1;
  if (t <= 0.4) return 1 - (t - 0.2) / 0.2;
  if (t <= 0.6) return 0;
  return (t - 0.6) / 0.2;
}

function particleColor(nx: number, ny: number, alpha: number) {
  const f = diagonalGreenFactor(nx, ny);
  const r = DARK.r + (GREEN.r - DARK.r) * f;
  const g = DARK.g + (GREEN.g - DARK.g) * f;
  const b = DARK.b + (GREEN.b - DARK.b) * f;
  return `rgba(${r | 0}, ${g | 0}, ${b | 0}, ${alpha})`;
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isHub: boolean;

  constructor(width: number, height: number) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.isHub = Math.random() < 0.12;
    this.radius = this.isHub ? Math.random() * 3 + 5 : Math.random() * 2.5 + 2;
  }

  update(width: number, height: number, mouse: { x: number; y: number } | null) {
    this.x += this.vx;
    this.y += this.vy;

    if (mouse) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.01 && dist < MOUSE_RADIUS) {
        const force = (1 - dist / MOUSE_RADIUS) * 3.2;
        this.x += (dx / dist) * force;
        this.y += (dy / dist) * force;
      }
    }

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D, width: number, height: number, allowGlow: boolean) {
    const nx = this.x / width;
    const ny = this.y / height;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = particleColor(nx, ny, this.isHub ? 0.95 : 0.85);
    if (this.isHub && allowGlow) {
      ctx.shadowColor = 'rgba(5, 220, 150, 0.8)';
      ctx.shadowBlur = 10;
    }
    ctx.fill();
    ctx.shadowBlur = 0;
  }
}

interface Pulse {
  a: Particle;
  b: Particle;
  t: number;
}

const NetworkCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let isMobile = false;
    let maxPulses = 8;
    let particles: Particle[] = [];
    let pulses: Pulse[] = [];
    let mouse: { x: number; y: number } | null = null;
    let animationFrameId = 0;
    let running = true;
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const initParticles = () => {
      particles = [];
      pulses = [];
      const count = isMobile
        ? Math.min(Math.floor(width / 24), 40)
        : Math.min(Math.floor(width / 15), 100);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const applySize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      isMobile = width <= 768;
      maxPulses = isMobile ? 3 : 8;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const scheduleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(applySize, 150);
    };

    const drawConnections = () => {
      const active: [Particle, Particle, number][] = [];

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONNECT_DISTANCE) {
            const opacity = (1 - dist / CONNECT_DISTANCE) * 0.8;
            const nx = (a.x + b.x) / 2 / width;
            const ny = (a.y + b.y) / 2 / height;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = particleColor(nx, ny, opacity);
            ctx.lineWidth = 1.2;
            ctx.stroke();
            active.push([a, b, dist]);
          }
        }

        if (mouse) {
          const p = particles[i];
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < MOUSE_RADIUS) {
            const opacity = (1 - dist / MOUSE_RADIUS) * 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(61, 220, 132, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion && active.length && pulses.length < maxPulses && Math.random() < 0.05) {
        const [a, b] = active[Math.floor(Math.random() * active.length)];
        pulses.push({ a, b, t: 0 });
      }
    };

    const drawPulses = () => {
      pulses = pulses.filter((p) => p.t < 1);
      pulses.forEach((p) => {
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(160, 255, 210, 0.95)';
        if (!isMobile) {
          ctx.shadowColor = 'rgba(61, 220, 132, 0.9)';
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
        p.t += 0.012;
      });
    };

    const drawCursor = () => {
      if (!mouse) return;
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(160, 255, 210, 0.9)';
      if (!isMobile) {
        ctx.shadowColor = 'rgba(61, 220, 132, 0.9)';
        ctx.shadowBlur = 14;
      }
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => p.update(width, height, mouse));
      drawConnections();
      drawPulses();
      particles.forEach((p) => p.draw(ctx, width, height, !isMobile));
      drawCursor();
    };

    const animate = () => {
      if (!running) return;
      renderFrame();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouse = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height ? { x, y } : null;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const rect = canvas.getBoundingClientRect();
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      mouse = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height ? { x, y } : null;
    };

    const handleTouchEnd = () => {
      mouse = null;
    };

    applySize();

    const observer = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && document.visibilityState === 'visible';
        if (running && !reduceMotion) {
          cancelAnimationFrame(animationFrameId);
          animate();
        }
      },
      { threshold: 0 },
    );
    observer.observe(canvas);

    const handleVisibilityChange = () => {
      running = document.visibilityState === 'visible';
      if (running && !reduceMotion) {
        cancelAnimationFrame(animationFrameId);
        animate();
      }
    };

    window.addEventListener('resize', scheduleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchcancel', handleTouchEnd);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (reduceMotion) {
      renderFrame();
    } else {
      animate();
    }

    return () => {
      running = false;
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', scheduleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchcancel', handleTouchEnd);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.networkCanvas} />;
};

export default function HeroBackgroundAnimation() {
  const [blobCount, setBlobCount] = useState(DESKTOP_BLOB_COUNT);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setBlobCount(mq.matches ? MOBILE_BLOB_COUNT : DESKTOP_BLOB_COUNT);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const blobs = Array.from({ length: blobCount }, (_, i) => i + 1);
  return (
    <div className={styles.backgroundLayer}>
      <div className={styles.layerBlobs}>
        {blobs.map((num) => (
          <Blob key={num} className={styles[`blob${num}`]} />
        ))}
      </div>

      <div className={styles.layerDarken} />

      <div className={styles.layerGlow} />

      <NetworkCanvas />
    </div>
  );
}
