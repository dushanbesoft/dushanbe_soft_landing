'use client';

import React, { useEffect, useRef, useState } from 'react';
import { techIcons, techNames } from './techIcons';
import styles from './HeroBackgroundAnimation.module.css';

interface BlobTech {
  Icon: (typeof techIcons)[string]['Icon'];
  color: string;
}

const Blob = ({ className, tech }: { className: string; tech?: BlobTech }) => (
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
    {tech && (
      <tech.Icon className={styles.blobIcon} style={{ color: tech.color }} aria-hidden="true" />
    )}
  </div>
);

const DARK = { r: 8, g: 24, b: 33 };
const GREEN = { r: 5, g: 190, b: 130 };
const CONNECT_DISTANCE = 250;
const MOUSE_RADIUS = 170;
const MOBILE_QUERY = '(max-width: 768px)';
// B2: halved from 20/50 to cut DOM + per-frame work while keeping the
// "field of blobs" look (blob CSS classes 1..25 stay populated).
const MOBILE_BLOB_COUNT = 10;
const DESKTOP_BLOB_COUNT = 25;

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

    // B4: reduced-motion is read live via a matchMedia change listener (below),
    // so toggling the OS setting is honoured without a reload.
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduceMotion = motionMq.matches;

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

    // B4: pointer events only stash the latest client coords (cheap); the
    // getBoundingClientRect + hit-test is applied at most once per frame
    // (see applyPointer in renderFrame), coalescing bursts of move events.
    let pendingClientX = 0;
    let pendingClientY = 0;
    let pointerDirty = false;
    let pointerCleared = false;

    // B3: uniform spatial grid (cell size = CONNECT_DISTANCE) makes connection
    // detection ~O(n) instead of O(n^2). Buckets + active-pair buffers are
    // reused across frames to avoid per-frame allocation.
    let grid: number[][] = [];
    let gridCols = 0;
    let gridRows = 0;
    const activeA: Particle[] = [];
    const activeB: Particle[] = [];
    let connFrame = 0;
    let connAccum = 0;

    const initParticles = () => {
      particles = [];
      pulses = [];
      // B2: roughly halved particle density + caps (mobile 40->20, desktop
      // 100->50) — the dominant per-frame cost driver.
      const count = isMobile
        ? Math.min(Math.floor(width / 32), 20)
        : Math.min(Math.floor(width / 24), 50);
      console.debug(
        `[hero] initParticles: ${isMobile ? 'mobile' : 'desktop'} count=${count} (width=${width})`,
      );
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const applySize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      isMobile = width <= 768;
      maxPulses = isMobile ? 2 : 5; // B2: scaled down with the lower particle count
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // (Re)build the spatial-grid buckets for the new dimensions.
      gridCols = Math.max(1, Math.ceil(width / CONNECT_DISTANCE));
      gridRows = Math.max(1, Math.ceil(height / CONNECT_DISTANCE));
      grid = new Array(gridCols * gridRows);
      for (let c = 0; c < grid.length; c++) grid[c] = [];
      initParticles();
    };

    const scheduleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(applySize, 150);
    };

    const assignGrid = () => {
      for (let c = 0; c < grid.length; c++) grid[c].length = 0;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let cx = Math.floor(p.x / CONNECT_DISTANCE);
        let cy = Math.floor(p.y / CONNECT_DISTANCE);
        if (cx < 0) cx = 0;
        else if (cx >= gridCols) cx = gridCols - 1;
        if (cy < 0) cy = 0;
        else if (cy >= gridRows) cy = gridRows - 1;
        grid[cy * gridCols + cx].push(i);
      }
    };

    const drawConnections = () => {
      // B3: bucket particles once, then only compare each particle against the
      // 3x3 neighbourhood of cells (cell size == CONNECT_DISTANCE guarantees any
      // pair within range shares or borders a cell). `j > i` dedupes each pair.
      assignGrid();
      let activeCount = 0;

      for (let cy = 0; cy < gridRows; cy++) {
        for (let cx = 0; cx < gridCols; cx++) {
          const bucket = grid[cy * gridCols + cx];
          for (let bi = 0; bi < bucket.length; bi++) {
            const i = bucket[bi];
            const a = particles[i];
            for (let ny = cy - 1; ny <= cy + 1; ny++) {
              if (ny < 0 || ny >= gridRows) continue;
              for (let nx = cx - 1; nx <= cx + 1; nx++) {
                if (nx < 0 || nx >= gridCols) continue;
                const nb = grid[ny * gridCols + nx];
                for (let bj = 0; bj < nb.length; bj++) {
                  const j = nb[bj];
                  if (j <= i) continue;
                  const b = particles[j];
                  const dist = Math.hypot(a.x - b.x, a.y - b.y);
                  if (dist < CONNECT_DISTANCE) {
                    const opacity = (1 - dist / CONNECT_DISTANCE) * 0.8;
                    const mnx = (a.x + b.x) / 2 / width;
                    const mny = (a.y + b.y) / 2 / height;
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = particleColor(mnx, mny, opacity);
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                    if (activeCount < activeA.length) {
                      activeA[activeCount] = a;
                      activeB[activeCount] = b;
                    } else {
                      activeA.push(a);
                      activeB.push(b);
                    }
                    activeCount++;
                  }
                }
              }
            }
          }
        }
      }

      // Mouse -> particle links (kept intact; linear over particles).
      if (mouse) {
        for (let i = 0; i < particles.length; i++) {
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

      if (!reduceMotion && activeCount && pulses.length < maxPulses && Math.random() < 0.05) {
        const k = Math.floor(Math.random() * activeCount);
        pulses.push({ a: activeA[k], b: activeB[k], t: 0 });
      }

      // B3: dev-only, throttled avg connections/frame to confirm the reduction.
      if (process.env.NODE_ENV !== 'production') {
        connFrame++;
        connAccum += activeCount;
        if (connFrame >= 120) {
          console.debug(
            `[hero] avg connections/frame ~= ${(connAccum / connFrame).toFixed(1)} ` +
              `(grid ${gridCols}x${gridRows}, particles=${particles.length})`,
          );
          connFrame = 0;
          connAccum = 0;
        }
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

    // B4: fold the latest pointer position into `mouse` once per frame.
    const applyPointer = () => {
      if (pointerCleared) {
        mouse = null;
        pointerCleared = false;
        pointerDirty = false;
        return;
      }
      if (!pointerDirty) return;
      pointerDirty = false;
      const rect = canvas.getBoundingClientRect();
      const x = pendingClientX - rect.left;
      const y = pendingClientY - rect.top;
      mouse = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height ? { x, y } : null;
    };

    const renderFrame = () => {
      applyPointer();
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
      pendingClientX = e.clientX;
      pendingClientY = e.clientY;
      pointerDirty = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      pendingClientX = touch.clientX;
      pendingClientY = touch.clientY;
      pointerDirty = true;
    };

    const handleTouchEnd = () => {
      // Defer clearing to the next frame so it stays coalesced with moves.
      pointerCleared = true;
    };

    // B1: defer the expensive first setup (canvas sizing + particle allocation
    // + starting the rAF loop) until the hero is on/near screen AND the main
    // thread is idle. This keeps particle work off the hydration critical path
    // (the root cause of the huge TTI). The CSS gradient placeholder + the
    // .layer* divs cover the canvas until this runs.
    let initialized = false;
    let idleHandle: number | null = null;
    let listenersAttached = false;

    const handleVisibilityChange = () => {
      if (!initialized) return;
      running = document.visibilityState === 'visible';
      console.debug(`[hero] visibilitychange -> ${running ? 'resume' : 'pause'}`);
      if (running && !reduceMotion) {
        cancelAnimationFrame(animationFrameId);
        animate();
      }
    };

    // B4: honour prefers-reduced-motion live. When turned on, stop the loop and
    // settle on one static frame; when turned off, resume if visible.
    const handleMotionChange = (e: MediaQueryListEvent) => {
      reduceMotion = e.matches;
      console.debug(`[hero] prefers-reduced-motion -> ${reduceMotion}`);
      if (!initialized) return;
      cancelAnimationFrame(animationFrameId);
      if (reduceMotion) {
        renderFrame();
      } else if (running) {
        animate();
      }
    };

    const attachListeners = () => {
      if (listenersAttached) return;
      listenersAttached = true;
      window.addEventListener('resize', scheduleResize);
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('touchstart', handleTouchMove, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('touchcancel', handleTouchEnd);
      document.addEventListener('visibilitychange', handleVisibilityChange);
      motionMq.addEventListener('change', handleMotionChange);
    };

    const doInit = () => {
      if (initialized) return;
      initialized = true;
      console.debug('[hero] canvas init starting (idle)');
      applySize();
      attachListeners();
      running = document.visibilityState === 'visible';
      if (reduceMotion) {
        renderFrame();
      } else if (running) {
        animate();
      }
    };

    const scheduleInit = () => {
      if (initialized || idleHandle !== null) return;
      const ric: (cb: IdleRequestCallback) => number =
        typeof window.requestIdleCallback === 'function'
          ? window.requestIdleCallback.bind(window)
          : (cb) =>
              window.setTimeout(
                () => cb({ didTimeout: true, timeRemaining: () => 0 }),
                200,
              ) as unknown as number;
      console.debug('[hero] init scheduled via requestIdleCallback');
      idleHandle = ric(() => {
        idleHandle = null;
        doInit();
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && document.visibilityState === 'visible';
        if (!initialized) {
          // First time the hero comes near the viewport: schedule the heavy
          // setup for an idle slot instead of running it eagerly on mount.
          if (entry.isIntersecting) scheduleInit();
          return;
        }
        running = visible;
        console.debug(`[hero] intersection -> ${running ? 'resume' : 'pause'}`);
        if (running && !reduceMotion) {
          cancelAnimationFrame(animationFrameId);
          animate();
        }
      },
      { threshold: 0, rootMargin: '200px' },
    );
    observer.observe(canvas);

    return () => {
      running = false;
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
      if (idleHandle !== null && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(idleHandle);
      }
      observer.disconnect();
      if (listenersAttached) {
        window.removeEventListener('resize', scheduleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchstart', handleTouchMove);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('touchcancel', handleTouchEnd);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        motionMq.removeEventListener('change', handleMotionChange);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.networkCanvas} />;
};

// Only blobs at least this big get a tech logo inside — smaller ones stay
// as plain glowing dots so the icon doesn't turn into an unreadable smudge.
const ICON_MIN_SIZE = 30;
const BLOB_SIZES: Record<number, number> = {
  1: 23, 2: 22, 3: 32, 4: 33, 5: 43, 6: 48, 7: 55, 8: 30, 9: 22, 10: 46,
  11: 27, 12: 42, 13: 19, 14: 49, 15: 52, 16: 20, 17: 52, 18: 63, 19: 23, 20: 59,
  21: 26, 22: 58, 23: 35, 24: 24, 25: 32, 26: 53, 27: 14, 28: 33, 29: 37, 30: 35,
  31: 45, 32: 17, 33: 30, 34: 35, 35: 20, 36: 49, 37: 55, 38: 26, 39: 42, 40: 17,
  41: 35, 42: 20, 43: 35, 44: 42, 45: 19, 46: 35, 47: 60, 48: 23, 49: 43, 50: 17,
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
  let techCursor = 0;
  return (
    <div className={styles.backgroundLayer}>
      <div className={styles.layerBlobs}>
        {blobs.map((num) => {
          const showIcon = (BLOB_SIZES[num] ?? 0) >= ICON_MIN_SIZE;
          const tech = showIcon ? techIcons[techNames[techCursor++ % techNames.length]] : undefined;
          return <Blob key={num} className={styles[`blob${num}`]} tech={tech} />;
        })}
      </div>

      <div className={styles.layerDarken} />

      <div className={styles.layerGlow} />

      <NetworkCanvas />
    </div>
  );
}
