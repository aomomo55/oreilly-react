import { useState, useEffect } from 'react';

export const useAnyKeyRender: () => void = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    window.addEventListener('keydown', () => forceRender);
    forceRender;
    return () => window.removeEventListener('keydown', () => forceRender);
  }, []);
};
