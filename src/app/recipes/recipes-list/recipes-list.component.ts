import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeDetail = new EventEmitter<Recipe>(); 
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }

  showRecipeDetail(recipe: Recipe) {
    this.recipeDetail.emit(recipe);
  }

}
