import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];
    recipeDetail = new EventEmitter<Recipe>();

    constructor(private shoppingService: ShoppingService) {
        this.recipes.push(new Recipe("Banana Shake", 
                        "Banana Shake description", 
                        "https://thecozycook.com/wp-content/uploads/2018/06/Peanut-Butter-Banana-Smoothie.jpg",
                        [new Ingredient('Banana',2), new Ingredient('Milk', 2)]
                        ));
        this.recipes.push(new Recipe("Pav Bhaji", 
                        "Pav Bhaji description",
                        "https://media.istockphoto.com/photos/indian-mumbai-food-pav-bhaji-from-vegetables-with-bread-closeup-in-a-picture-id1057140522?k=6&m=1057140522&s=612x612&w=0&h=JqbUoiQ7usEWOdsuaBqcqbRkDuIYXCg6qbyhsid8cmo=",
                        [new Ingredient("Buns", 6), new Ingredient("Tomatoes", 12)]
                        ));
    }

    getRecipes() {
        return this.recipes.slice();
    }

    sendRecipe(recipe: Recipe) {
        this.recipeDetail.emit(recipe);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }
}