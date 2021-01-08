import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  
  constructor(private shoppingService: ShoppingService) {
    this.shoppingService.listUpdated.subscribe(
      (input) => {
        this.ingredients = input;    
      }
    )
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getShoppingIngredients();
  }

}
