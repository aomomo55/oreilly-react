import React, { useEffect, useState } from 'react';

type useContentSwitch = () => [
  number,
  React.Dispatch<React.SetStateAction<number>>,
];

export const useContentSwitch: useContentSwitch = () => {
  const defaultContent = sessionStorage.getItem('content-id');
  const [contentId, setContentId] = useState(
    defaultContent ? Number(defaultContent) : 5,
  );

  useEffect(
    () => sessionStorage.setItem('content-id', contentId.toString()),
    [contentId],
  );

  return [contentId, setContentId];
};
