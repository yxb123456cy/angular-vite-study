import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  // templateUrl: './app.html',
  templateUrl: "./app.html",
  styleUrl: './app.scss'
})
export class App {
  inputText: string = ""
  projectName: string = "angular-vite-study"
  protected readonly title = signal('angular-vite-study');

  handleInputChange(e: Event) {
    this.inputText = (e.target as HTMLInputElement).value;
  }
}
