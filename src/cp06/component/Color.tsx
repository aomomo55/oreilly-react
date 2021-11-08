import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { ColorData } from '../type/interface';

import StarRating from './StarRating';

type Props = ColorData & {
  onStarClick: (id: string, rating: number) => void;
  onRemoveColor: () => void;
};

const Color: React.VFC<Props> = ({
  id,
  title,
  color,
  rating,
  onStarClick,
  onRemoveColor,
}: Props) => {
  const style: React.CSSProperties = {
    height: 50,
    backgroundColor: color,
  };

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={onRemoveColor}>
        <FaTrash />
      </button>
      <div style={style} />
      <StarRating id={id} selectedStars={rating} onStarClick={onStarClick} />
    </section>
  );
};

export default Color;
