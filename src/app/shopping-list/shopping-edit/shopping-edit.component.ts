import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', { static: true }) inputName: ElementRef;
  @ViewChild('inputAmount', { static: true }) inputAmount: ElementRef;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  addNewIngredient() {
    let name = this.inputName.nativeElement.value;
    let amount: number = parseInt(this.inputAmount.nativeElement.value);
    let newIngredient = new Ingredient(name,amount);
    this.shoppingService.addNewIngredient(newIngredient); 
  }

}
