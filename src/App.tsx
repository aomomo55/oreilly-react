import React from 'react';
import './App.css';
import TableOfContent from './TOC/TableOfContent';

import Menu from './cp05/component/Menu';
import Chapter6 from './cp06/Chapter6';
import Chapter7 from './cp07/Chapter7';

function App(): React.ReactElement {
  return (
    <div className="App">
      <TableOfContent />
      <Menu title="Delicious Recipes" />
      <hr />
      <Chapter6 />
      <hr />
      <Chapter7 />
    </div>
  );
}

export default App;
