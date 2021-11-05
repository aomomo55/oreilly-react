import React from 'react';

import recipes from '../data/recipes.json';

import Recipe from './Recipe';

type Props = {
  title: string;
};

const Menu: React.VFC<Props> = (props: Props) => (
  <article>
    <header>
      <h1>{props.title}</h1>
    </header>
    {recipes.map((menu, idx) => (
      <div className="recipes" key={`recipe-${idx + 1}`}>
        <Recipe
          key={`${menu.name.toLowerCase().replace(/ /g, '-')}-${idx + 1}`}
          {...menu}
        />
      </div>
    ))}
  </article>
);

export default Menu;
