import React from 'react';

import { useColors } from '../hooks/color-hooks';
import Star from './Star';

type Props = {
  id: string;
  style?: React.CSSProperties;
  totalStars?: number;
  selectedStars: number;
};

const StarRating: React.VFC<Props> = ({
  id,
  style,
  totalStars = 5,
  selectedStars,
}: Props) => {
  const { updateRate } = useColors();
  return (
    <div style={{ padding: '5px', ...style }}>
      {[...Array(totalStars)].map((_, idx) => (
        <Star
          key={`star-${idx}`}
          selected={selectedStars > idx}
          onClick={() => updateRate(id, idx + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
