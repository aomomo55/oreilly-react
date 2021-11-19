import React, { useReducer } from 'react';

const Checkbox: React.VFC = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked.toString()} onChange={toggle} />
      {checked ? 'checked' : 'not checked'}
    </>
  );
};

export default Checkbox;
