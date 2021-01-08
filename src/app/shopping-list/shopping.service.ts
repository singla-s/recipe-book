import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingService {
    
    listUpdated = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [new Ingredient('Apples', 2), new Ingredient('Bread', 1), new Ingredient('Tomatoes', 10)];
    constructor() {
        
    }

    getShoppingIngredients() {
        return this.ingredients.slice();
    }

    addNewIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.listUpdated.emit(this.getShoppingIngredients().slice());
    }
}