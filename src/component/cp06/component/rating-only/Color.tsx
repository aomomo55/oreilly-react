import React from 'react';

import { ColorData } from '../../type/interface';

import StarRating from './StarRating';

type Props = ColorData & {
  onStarClick: (id: string, newRating: number) => void;
};

const Color: React.VFC<Props> = ({
  id,
  title,
  color,
  rating,
  onStarClick,
}: Props) => {
  const style: React.CSSProperties = {
    height: 50,
    backgroundColor: color,
  };

  return (
    <section>
      <h1>{title}</h1>
      <div style={style} />
      <StarRating id={id} selectedStars={rating} onStarClick={onStarClick} />
    </section>
  );
};

export default Color;
