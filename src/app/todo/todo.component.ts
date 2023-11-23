import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todos = [
    {
      id: 1,
      title: 'Go Grocery Shopping',
      description: 'Buy milk, bread, eggs...',
      completed: false
    },
    {
      id: 2,
      title: 'Wash my car',
      description: '',
      completed: true
    },
    {
      id: 3,
      title: 'Pay electric bill',
      description: 'Pay online',
      completed: false
    }
  ];

}
