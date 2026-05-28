'use client';

import { useEffect } from 'react';

export default function InteractionGuards() {
  useEffect(() => {
    const blockEvent = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', blockEvent);
    document.addEventListener('selectstart', blockEvent);
    document.addEventListener('copy', blockEvent);
    document.addEventListener('cut', blockEvent);
    document.addEventListener('dragstart', blockEvent);

    return () => {
      document.removeEventListener('contextmenu', blockEvent);
      document.removeEventListener('selectstart', blockEvent);
      document.removeEventListener('copy', blockEvent);
      document.removeEventListener('cut', blockEvent);
      document.removeEventListener('dragstart', blockEvent);
    };
  }, []);

  return null;
}