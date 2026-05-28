'use client';

import { useEffect, useRef } from 'react';

export default function ClickEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const el = document.createElement('span');
      el.textContent = 'KLICK!';
      const size = 14 + Math.random() * 20;
      const rotation = -15 + Math.random() * 30;

      Object.assign(el.style, {
        position: 'fixed',
        zIndex: 9999,
        pointerEvents: 'none',
        fontFamily: "'Bangers', cursive",
        fontSize: `${size}px`,
        color: ['#E63946', '#FFD166', '#1D3557', '#fff'][Math.floor(Math.random() * 4)],
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        opacity: '1',
        transition: 'none',
        userSelect: 'none',
        lineHeight: 1,
        letterSpacing: '1px',
      });

      document.body.appendChild(el);

      requestAnimationFrame(() => {
        Object.assign(el.style, {
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          opacity: '0',
          transform: `translate(-50%, calc(-50% - ${40 + Math.random() * 30}px)) rotate(${rotation}deg)`,
        });
      });

      setTimeout(() => el.remove(), 900);
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <div ref={containerRef} aria-hidden="true" />;
}
