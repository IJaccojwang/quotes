import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: string[];

  constructor() {
    this.quotes = ["I have no special talent. I am only passionaltely curious"];
  }
}
