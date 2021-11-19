import React from 'react';

import { Ingredient } from '../type/interface';

const IngredientItem: React.VFC<Ingredient> = ({
  amount,
  measurement,
  name,
}: Ingredient) => (
  <li>
    {amount} {measurement} {name}
  </li>
);

export default IngredientItem;
