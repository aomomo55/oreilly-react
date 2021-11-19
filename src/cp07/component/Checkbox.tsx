import React, { useEffect, useState } from 'react';

const Checkbox: React.VFC = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log(`checked: ${checked.toString()}`);
  }, [checked]);

  return (
    <>
      <input
        type="checkbox"
        value={checked.toString()}
        onChange={() => setChecked((checked) => !checked)}
      />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};

export default Checkbox;
