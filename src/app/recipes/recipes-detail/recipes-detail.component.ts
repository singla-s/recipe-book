import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipeDetailInput: Recipe;
  constructor(private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.recipeService.recipeDetail.subscribe( 
      (input: Recipe) => {
        this.recipeDetailInput = input;
      });
  }

  AddIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetailInput.ingredients);
  }

}
