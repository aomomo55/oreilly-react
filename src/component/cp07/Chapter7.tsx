import React, { useState } from 'react';
import Cat from './component/Cat';

import Checkbox from './component/Checkbox';
import Phrase from './component/Phrase';
import WordCount from './component/WordCount';

const Chapter7: React.VFC = () => {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);

  const addCat = () => {
    const result = prompt('Name a cat');
    if (result) {
      setCats([...cats, result]);
    }
  };

  return (
    <>
      <h1 id="Chapter07">Chapter 7</h1>
      <Checkbox />
      <hr />
      <Phrase />
      <hr />
      <WordCount>Yout are not going to believe this but...</WordCount>
      <hr />
      {cats.map((name, idx) => (
        <Cat key={idx} name={name} />
      ))}
      <button onClick={addCat}>Add a Cat</button>
    </>
  );
};

export default Chapter7;
