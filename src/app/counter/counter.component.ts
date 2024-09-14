import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
@Input() counter: number = 0;
@Output() countChange = new EventEmitter<number>();


incrementCounter() {
  this.counter++;
this.countChange.emit(this.counter);
}

decrementCounter() {
  this.counter--
this.countChange.emit(this.counter);
}

resetCounter() {
  this.counter =0;
  this.countChange.emit(this.counter);
}

}