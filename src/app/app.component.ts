import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-book';
  active: string = "recipe";

  navigateComponent(event) {
    if(event == "recipe") {
      this.active = "recipe";
    }
    else {
      this.active = "shopping-list";
    }
  }
}
