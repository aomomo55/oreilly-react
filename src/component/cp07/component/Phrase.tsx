import React, { useEffect, useState } from 'react';

const Phrase: React.VFC = () => {
  const [val, set] = useState('');
  const [phrase, setPhrase] = useState('example phrase');

  const createPhrase = () => {
    setPhrase(val);
    set('');
  };

  useEffect(() => {
    console.log(`typing "${val}"`);
  }, [val]);

  useEffect(() => {
    console.log(`saved phrase: "${phrase}"`);
  }, [phrase]);

  return (
    <>
      <label>Favorite phrase:</label>
      <input
        type="text"
        value={val}
        placeholder={phrase}
        onChange={(e) => set(e.target.value)}
      />
      <button onClick={createPhrase}>send</button>
    </>
  );
};

export default Phrase;
