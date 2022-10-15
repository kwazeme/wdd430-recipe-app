import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is a simple test recipe',
        'https://dcassetcdn.com/design_img/10150/1674/1674_291296_10150_image.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Another Test Recipe',
        'This is a simple test recipe',
        'https://dcassetcdn.com/design_img/10150/1674/1674_291296_10150_image.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 10)
        ]),
      ];

      constructor(private slsService: ShoppingListService) {
        
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[] ) {
        this.slsService.addIngredients(ingredients);
    }


}