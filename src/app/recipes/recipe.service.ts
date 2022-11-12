import { Recipe } from "./recipe.model";
import { Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
// import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    // recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [];
    // private recipes: Recipe[] = [
    //     new Recipe('A Test Recipe',
    //     'This is a simple test recipe',
    //     'https://dcassetcdn.com/design_img/10150/1674/1674_291296_10150_image.jpg',
    //     [
    //         new Ingredient('Meat', 1),
    //         new Ingredient('French Fries', 20)
    //     ]),
    //     new Recipe('Another Test Recipe',
    //     'This is a simple test recipe',
    //     'https://dcassetcdn.com/design_img/10150/1674/1674_291296_10150_image.jpg',
    //     [
    //         new Ingredient('Buns', 2),
    //         new Ingredient('Meat', 10)
    //     ]),
    //   ];

      constructor(private slsService: ShoppingListService) {
        
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[] ) {
        this.slsService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }


}