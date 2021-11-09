import React, { FormEvent } from 'react';

import { useInput } from '../hooks/hooks';

type Props = {
  onNewColor: (title: string, color: string) => void;
};

const AddColorForm = ({ onNewColor }: Props) => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onNewColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="color title..."
        required
        {...titleProps}
      />
      <input type="color" required {...colorProps} />
      <button>ADD</button>
    </form>
  );
};

export default React.memo(AddColorForm);
