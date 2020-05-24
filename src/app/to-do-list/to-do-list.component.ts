import { Component, OnInit } from '@angular/core';
import { toDo } from '../sharedAssets/to-do.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDos: toDo[] = [
    new toDo('Homework', 60),
    new toDo('Studying', 100)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toDoAddedEvent(t: toDo) {
    this.toDos.push(t);
  }

}
