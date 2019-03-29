import {SubCategory} from "./subCategory";
import {Tag} from "./tag";
import {StepRecipes} from "./step-recipes";
import {Ingredient} from "./ingredient";

export class Recipe{
  id: number;
  title: string;
  subcategory: SubCategory;
  observations: string;
  addedDate: any;
  coverPhoto:  any;
  ingredientsList: Ingredient[];
  tagsList: Tag[];
  stepRecipeslist:  StepRecipes;
}
