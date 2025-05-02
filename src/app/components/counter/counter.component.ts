import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = 0;
  increment() {
    this.counterValue++;
  }
  decrement() {
    this.counterValue--;
  }
  reset() {
    this.counterValue = 0;
  }
}
