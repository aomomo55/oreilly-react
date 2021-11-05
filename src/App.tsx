import React from 'react';
import './App.css';

import Menu from './cp05/component/Menu';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Menu title="Delicious Recipes" />
    </div>
  );
}

export default App;
