import React, { useState, useEffect } from 'react';

import colorData from './data/color-data.json';

import AddColorFormRef from './component/AddColorFormRef';
import AddColorForm from './component/AddColorForm';
import ColorList from './component/ColorList';
import RatingColorList from './component/rating-only/ColorList';

const Chapter6: React.VFC = () => {
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const defaultRatings: { [key: string]: number } = {};
    colorData.forEach((color) => (defaultRatings[color.id] = color.rating));
    setRatings(defaultRatings);
  }, []);

  const onStarClickForRatingOnly = (id: string, newRating: number) => {
    const newRatings = ratings;
    newRatings[id] = newRating;
    setRatings(Object.assign({}, newRatings));
  };

  return (
    <>
      <h1 id="Chapter06">Chapter 6</h1>
      <AddColorForm />
      <ColorList />
      <h2>Rating change only</h2>
      <RatingColorList
        colors={colorData}
        ratings={ratings}
        onStarClick={onStarClickForRatingOnly}
      />
      <h2>useRef</h2>
      <AddColorFormRef />
    </>
  );
};

export default Chapter6;
