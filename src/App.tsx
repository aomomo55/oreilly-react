import React from 'react';
import './App.css';

import Menu from './cp05/component/Menu';
import StarRating from './cp06/component/StarRating';

function App(): React.ReactElement {
  return (
    <div className="App">
      <Menu title="Delicious Recipes" />
      <hr />
      <StarRating
        style={{ backgroundColor: 'lightblue' }}
        totalStars={5}
        onDoubleClick={() => alert('double click')}
      />
    </div>
  );
}

export default App;
