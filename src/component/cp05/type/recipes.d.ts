import { RecipeInfomation } from './interface';

declare module './data/recipes.json' {
  const recipes: RecipeInfomation[];
  export = recipes;
}
