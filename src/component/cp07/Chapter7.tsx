import React from 'react';

import Checkbox from './component/Checkbox';
import Phrase from './component/Phrase';
import WordCount from './component/WordCount';

const Chapter7: React.VFC = () => (
  <>
    <h1 id="Chapter07">Chapter 7</h1>
    <Checkbox />
    <hr />
    <Phrase />
    <hr />
    <WordCount>Yout are not going to believe this but...</WordCount>
  </>
);

export default Chapter7;
