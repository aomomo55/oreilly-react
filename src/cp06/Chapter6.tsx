import React, { useState, useEffect } from 'react';
import { v4 } from 'uuid';

import colorData from './data/color-data.json';

import AddColorFormRef from './component/AddColorFormRef';
import AddColorForm from './component/AddColorForm';
import ColorList from './component/ColorList';
import RatingColorList from './component/rating-only/ColorList';

const Chapter6: React.VFC = () => {
  const [colors, setColors] = useState(colorData);
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const onStarClick = (id: string, rate: number) =>
    setColors(
      colors.map((color) => {
        if (color.id === id) color.rating = rate;
        return color;
      }),
    );

  const onRemoveColor = (id: string) =>
    setColors(colors.filter((color) => color.id !== id));

  const onNewColor = (title: string, color: string) =>
    setColors([...colors, { id: v4(), rating: 0, title, color }]);
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
      <h1>Chapter 6</h1>
      <AddColorForm onNewColor={onNewColor} />
      <ColorList
        colors={colors}
        onStarClick={onStarClick}
        onRemoveColor={onRemoveColor}
      />
      <h2>Rating change only</h2>
      <RatingColorList
        colors={colorData}
        ratings={ratings}
        onStarClick={onStarClickForRatingOnly}
      />
      <h2>useRef</h2>
      <AddColorFormRef onNewColor={onNewColor} />
    </>
  );
};

export default Chapter6;
