import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { ColorData } from '../type/interface';
import { useColors } from '../hooks/color-hooks';

import StarRating from './StarRating';

const Color: React.VFC<ColorData> = ({
  id,
  title,
  color,
  rating,
}: ColorData) => {
  const { removeColor } = useColors();
  const style: React.CSSProperties = {
    height: 50,
    backgroundColor: color,
  };

  return (
    <section>
      <h1>{title}</h1>
      <button onClick={() => removeColor(id)}>
        <FaTrash />
      </button>
      <div style={style} />
      <StarRating id={id} selectedStars={rating} />
    </section>
  );
};

export default Color;
