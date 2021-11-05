import React from 'react';

import { Ingredient } from '../type/interface';

import IngredientItem from './IngredientItem';

type Props = {
  list: Ingredient[];
};

const IngredientsList: React.VFC<Props> = (props: Props) => (
  <ul className="ingredients">
    {props.list.map((ingredient, idx) => (
      <IngredientItem key={`ingredient-${idx}`} {...ingredient} />
    ))}
  </ul>
);

export default IngredientsList;
