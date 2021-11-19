import React, { useRef } from 'react';
import { useColors } from '../hooks/color-hooks';

const AddColorFormRef: React.VFC = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);
  const { addColor } = useColors();

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!titleRef.current || !colorRef.current) return;
    addColor(titleRef.current.value, colorRef.current.value);
    titleRef.current.value = '';
    colorRef.current.value = '';
  };

  return (
    <form>
      <input type="text" ref={titleRef} placeholder="color title..." required />
      <input type="color" ref={colorRef} required />
      <button onClick={(e) => onClick(e)}>ADD</button>
    </form>
  );
};

export default React.memo(AddColorFormRef);
