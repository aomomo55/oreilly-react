import React, { useCallback, useEffect, useMemo } from 'react';
import { useAnyKeyRender } from '../hooks/useAnyKeyToRender';

type Props = {
  children: string;
};

const WordCount: React.VFC<Props> = ({ children = '' }: Props) => {
  useAnyKeyRender();

  const words = useMemo(() => {
    const words = children.split(' ');
    return words;
  }, [children]);

  const fn = useCallback(() => {
    console.log('hello');
    console.log('world');
  }, []);

  useEffect(() => {
    console.log('fresh render');
    fn();
  }, [words]);

  return (
    <>
      <p>{children}</p>
      <p>
        <strong>{words.length} - words</strong>
      </p>
    </>
  );
};

export default WordCount;
