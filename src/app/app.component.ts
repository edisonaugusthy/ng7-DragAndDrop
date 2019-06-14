import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = [...Array(10).keys()].map(n => n + 1)
  details = [...Array(10).keys()].map(n => n + 10)

  onDrop(e) {
    console.log(e);
  }
}
