import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor() { 
    this.recipes.push(new Recipe("Banana Shake", "Banana Shake description", "https://thecozycook.com/wp-content/uploads/2018/06/Peanut-Butter-Banana-Smoothie.jpg"));
    this.recipes.push(new Recipe("Banana Shake", "Banana Shake description", "https://thecozycook.com/wp-content/uploads/2018/06/Peanut-Butter-Banana-Smoothie.jpg"));
  }

  ngOnInit(): void {
  }

}
