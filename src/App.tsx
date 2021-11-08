import React from 'react';
import './App.css';

import Menu from './cp05/component/Menu';
import Chapter6 from './cp06/Chapter6';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Menu title="Delicious Recipes" />
      <hr />
      <Chapter6 />
    </div>
  );
}

export default App;
