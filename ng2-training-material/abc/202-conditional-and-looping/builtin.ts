import { Component } from '@angular/core';

const roomData = [
  { name: 'kitchen', contents: ['dishes', 'table', 'chairs'] },
  { name: 'bedroom', contents: ['bed', 'lamp'] }
];

@Component({
  selector: 'abc-page',
  templateUrl: './builtin.html'
})
export class BuiltInComponent {
  n: number = 0;
  todos: string[] = ['Eat Breakfast', 'Walk Dog', 'Breathe'];
  rooms: {} = roomData;

  increment() {
    this.n++;
    this.todos.push(`Task ${this.todos.length + 1}`);
  }
}
