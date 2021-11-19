import React, { useCallback } from 'react';

type Props = {
  name: string;
};

const Cat: React.VFC<Props> = ({ name }: Props) => {
  console.log(`rendering ${name}`);

  const meow = useCallback(() => console.log(`${name} has meowed.`), []);

  return <p onClick={meow}>{name}</p>;
};

export default React.memo(Cat);
