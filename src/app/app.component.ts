import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  tDrop(e) {
    this.array1 = this.array1.filter((item) => {
      return item !== e;
    });
  }
  onDrop(e) {
    this.array2.push(e);
    this.array2.sort((a, b) => a - b);
  }
}
