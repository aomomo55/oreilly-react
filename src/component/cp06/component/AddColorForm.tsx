import React, { FormEvent } from 'react';

import { useInput } from '../hooks/hooks';
import { useColors } from '../hooks/color-hooks';

const AddColorForm: React.VFC = () => {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#000000');
  const { addColor } = useColors();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
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
