import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingList';
  currState = 'task';

  onNavigate(feature: string) {
    this.currState = feature;
  }
}
