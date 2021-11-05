import React from 'react';

import { RecipeInfomation } from '../type/interface';

import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

const Recipe: React.VFC<RecipeInfomation> = ({
  name,
  ingredients,
  steps,
}: RecipeInfomation) => (
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h2>{name}</h2>
    <IngredientsList list={ingredients} />
    <Instructions title="Cooking Instructions" steps={steps} />
  </section>
);

export default Recipe;
