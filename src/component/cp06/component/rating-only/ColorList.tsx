import React from 'react';

import Color from './Color';
import { ColorData } from '../../type/interface';

type Props = {
  colors: ColorData[];
  ratings: { [key: string]: number };
  onStarClick: (id: string, newRating: number) => void;
};

const RatingColorList: React.VFC<Props> = ({
  colors,
  ratings,
  onStarClick,
}: Props) => (
  <div>
    {!colors.length
      ? 'No Colors Listed.'
      : colors.map((color) => (
          <Color
            key={color.id}
            onStarClick={onStarClick}
            {...color}
            rating={ratings[color.id]}
          />
        ))}
  </div>
);

export default RatingColorList;
