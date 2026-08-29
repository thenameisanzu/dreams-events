'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  /* Current mouse position */
  const mouse = useRef({ x: -200, y: -200 });

  /* Ring lags behind with lerp */
  const ring  = useRef({ x: -200, y: -200 });

  const rafId = useRef<number | null>(null);

  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible,  setVisible]  = useState(false);

  useEffect(() => {
    /* ── Move ──────────────────────────────────────── */
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    /* ── Click burst ───────────────────────────────── */
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    /* ── Hover detection on interactive elements ───── */
    const SELECTORS =
      'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]';

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTORS)) setHovering(true);
    };
    const onOut  = (e: MouseEvent) => {
      if ((e.target as Element).closest(SELECTORS)) setHovering(false);
    };

    /* ── Hide when cursor leaves window ────────────── */
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove',  onMove,  { passive: true });
    window.addEventListener('mousedown',  onDown);
    window.addEventListener('mouseup',    onUp);
    window.addEventListener('mouseover',  onOver,  { passive: true });
    window.addEventListener('mouseout',   onOut,   { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    /* ── Animation loop: snap dot, lerp ring ───────── */
    const LERP = 0.12;

    const tick = () => {
      const mx = mouse.current.x;
      const my = mouse.current.y;

      /* Dot: instant */
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }

      /* Ring: smooth lerp */
      ring.current.x += (mx - ring.current.x) * LERP;
      ring.current.y += (my - ring.current.y) * LERP;

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
      window.removeEventListener('mouseover',  onOver);
      window.removeEventListener('mouseout',   onOut);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className={[
          styles.ring,
          hovering ? styles.ringHover : '',
          clicking ? styles.ringClick : '',
          !visible ? styles.hidden    : '',
        ].join(' ')}
        aria-hidden="true"
      />

      {/* Precise dot */}
      <div
        ref={dotRef}
        className={[
          styles.dot,
          hovering ? styles.dotHover  : '',
          clicking ? styles.dotClick  : '',
          !visible ? styles.hidden    : '',
        ].join(' ')}
        aria-hidden="true"
      />
    </>
  );
}
