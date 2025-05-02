import { Component, signal } from '@angular/core';
import { GreetingsComponent } from '../components/greetings/greetings.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingsComponent, CounterComponent],
  templateUrl : './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  message = signal('Hello from Home Component!');
  keyHandler(event: KeyboardEvent) {
    console.log(`user typed ${event.key}`);
  }
}
