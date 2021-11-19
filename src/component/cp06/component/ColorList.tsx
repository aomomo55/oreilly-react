import React from 'react';

import { useColors } from '../hooks/color-hooks';
import Color from './Color';

const ColorList: React.VFC = () => {
  const { colors } = useColors();

  return (
    <div>
      {!colors.length
        ? 'No Colors Listed.'
        : colors.map((color) => <Color key={color.id} {...color} />)}
    </div>
  );
};

export default ColorList;
