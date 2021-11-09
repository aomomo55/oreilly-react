import React, { useRef } from 'react';

type Props = {
  onNewColor: (title: string, color: string) => void;
};

const AddColorFormRef: React.VFC<Props> = ({ onNewColor }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!titleRef.current || !colorRef.current) return;
    onNewColor(titleRef.current.value, colorRef.current.value);
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
