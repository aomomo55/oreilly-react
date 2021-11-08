import React from 'react';

import Color from './Color';
import { ColorData } from '../type/interface';

type Props = {
  colors: ColorData[];
  onStarClick: (id: string, newRating: number) => void;
  onRemoveColor: (id: string) => void;
};

const ColorList: React.VFC<Props> = ({
  colors,
  onStarClick,
  onRemoveColor,
}: Props) => (
  <div>
    {!colors.length
      ? 'No Colors Listed.'
      : colors.map((color) => (
          <Color
            key={color.id}
            onStarClick={onStarClick}
            onRemoveColor={() => onRemoveColor(color.id)}
            {...color}
          />
        ))}
  </div>
);

export default ColorList;
