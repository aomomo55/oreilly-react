import React from 'react';

import Star from './Star';

type Props = {
  id: string;
  style?: React.CSSProperties;
  totalStars?: number;
  selectedStars: number;
  onStarClick: (id: string, newRating: number) => void;
};

const StarRating: React.VFC<Props> = ({
  id,
  style,
  totalStars = 5,
  selectedStars,
  onStarClick,
}: Props) => {
  return (
    <div style={{ padding: '5px', ...style }}>
      {[...Array(totalStars)].map((_, idx) => (
        <Star
          key={`star-${idx}`}
          selected={selectedStars > idx}
          onClick={() => onStarClick(id, idx + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
