'use client';

import React, { useEffect, useRef } from 'react';
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

const NetworkCanvas = () => {
  const canvasLightRef = useRef<HTMLCanvasElement>(null);
  const canvasDarkRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasLight = canvasLightRef.current;
    const canvasDark = canvasDarkRef.current;
    if (!canvasLight || !canvasDark) return;

    const ctxLight = canvasLight.getContext('2d');
    const ctxDark = canvasDark.getContext('2d');
    if (!ctxLight || !ctxDark) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvasLight.width = window.innerWidth;
      canvasLight.height = window.innerHeight;
      canvasDark.width = window.innerWidth;
      canvasDark.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor() {
        this.x = Math.random() * canvasLight!.width;
        this.y = Math.random() * canvasLight!.height;
        this.vx = (Math.random() - 0.5) * 0.5; // Slow speed
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 5 + 3; // 3 to 8 px radius (6 to 16 px diameter)
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > canvasLight!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvasLight!.height) this.vy *= -1;
      }

      draw() {
        if (!ctxLight || !ctxDark) return;
        
        // Draw dark layer
        ctxDark.beginPath();
        ctxDark.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctxDark.fillStyle = '#081821';
        ctxDark.fill();

        // Draw light layer
        ctxLight.beginPath();
        ctxLight.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctxLight.fillStyle = 'rgba(5, 160, 110, 1)';
        ctxLight.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numParticles = Math.min(Math.floor(window.innerWidth / 15), 100);
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 250) {
            const opacity = 1 - distance / 250;
            
            // Draw dark layer line
            ctxDark.beginPath();
            ctxDark.moveTo(particles[i].x, particles[i].y);
            ctxDark.lineTo(particles[j].x, particles[j].y);
            ctxDark.strokeStyle = `rgba(8, 24, 33, ${opacity})`;
            ctxDark.lineWidth = 1.5;
            ctxDark.stroke();

            // Draw light layer line
            ctxLight.beginPath();
            ctxLight.moveTo(particles[i].x, particles[i].y);
            ctxLight.lineTo(particles[j].x, particles[j].y);
            ctxLight.strokeStyle = `rgba(5, 160, 110, ${opacity * 0.8})`;
            ctxLight.lineWidth = 1.5;
            ctxLight.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctxLight.clearRect(0, 0, canvasLight.width, canvasLight.height);
      ctxDark.clearRect(0, 0, canvasDark.width, canvasDark.height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      
      drawLines();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasDarkRef} className={styles.networkCanvasDark} />
      <canvas ref={canvasLightRef} className={styles.networkCanvasLight} />
    </>
  );
};

export default function HeroBackgroundAnimation() {
  const blobs = Array.from({ length: 50 }, (_, i) => i + 1);
  return (
    <div className={styles.backgroundLayer}>
      {/* 1. Слой: Анимация с кружками (SVG-кляксы) */}
      <div className={styles.layerBlobs}>
        {blobs.map((num) => (
          <Blob key={num} className={styles[`blob${num}`]} />
        ))}
      </div>

      {/* 2. Слой: Затемнение (Диагональное, скрывает нижние слои в центре) */}
      <div className={styles.layerDarken} />

      {/* 3. Слой: Свечение (Свечение по углам) */}
      <div className={styles.layerGlow} />

      {/* 4. Слой: Анимация паутины (Сверху, поверх всего остального) */}
      <NetworkCanvas />
    </div>
  );
}
