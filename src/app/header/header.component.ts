import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() clickEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick() {
    return this.clickEvent.emit("recipe");
  }

  onShoppingListClick() {
    return this.clickEvent.emit("shopping-list");
  }
}
