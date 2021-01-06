import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName', { static: true }) inputName: ElementRef;
  @ViewChild('inputAmount', { static: true }) inputAmount: ElementRef;
  @Output() newItem = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient() {
    let name = this.inputName.nativeElement.value;
    let amount = this.inputAmount.nativeElement.value;
    this.newItem.emit(new Ingredient(name,amount));
  }

}
