import React, { MouseEventHandler, useState } from 'react';

import Star from './Star';

type Props = {
  style?: React.CSSProperties;
  totalStars: number;
  onDoubleClick?: MouseEventHandler;
};

const StarRating: React.VFC<Props> = ({
  style,
  totalStars,
  ...props
}: Props) => {
  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <div style={{ padding: '5px', ...style }} {...props}>
      {[...Array(totalStars)].map((_, idx) => (
        <Star
          key={`star-${idx}`}
          selected={selectedStars > idx}
          onClick={() => setSelectedStars(idx + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
