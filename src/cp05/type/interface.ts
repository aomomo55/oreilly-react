export type Ingredient = {
  name: string;
  amount: number;
  measurement: string;
};

export interface RecipeInfomation {
  name: string;
  ingredients: Ingredient[];
  steps: string[];
}
