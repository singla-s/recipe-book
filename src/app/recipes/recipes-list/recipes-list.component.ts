import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeDetail = new EventEmitter<Recipe>(); 
  recipes: Recipe[] = [];
  constructor() { 
    this.recipes.push(new Recipe("Banana Shake", "Banana Shake description", "https://thecozycook.com/wp-content/uploads/2018/06/Peanut-Butter-Banana-Smoothie.jpg"));
    this.recipes.push(new Recipe("Pav Bhaji", "Pav Bhaji description", "https://media.istockphoto.com/photos/indian-mumbai-food-pav-bhaji-from-vegetables-with-bread-closeup-in-a-picture-id1057140522?k=6&m=1057140522&s=612x612&w=0&h=JqbUoiQ7usEWOdsuaBqcqbRkDuIYXCg6qbyhsid8cmo="));
  }

  ngOnInit(): void {
  }

  showRecipeDetail(recipe: Recipe) {
    this.recipeDetail.emit(recipe);
  }

}
