import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Output() taskWasSelected = new EventEmitter<Task>();
  tasks: Task[] = [
    new Task('FirstTask', 'Do Nothing', 
    'https://cdn-images-1.medium.com/max/2000/1*KiC1gf3x3Ia_2PBYqfkLBg.jpeg'),
    new Task('AnotherTask', 'Do Nothing', 
    'https://cdn-images-1.medium.com/max/2000/1*KiC1gf3x3Ia_2PBYqfkLBg.jpeg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onTaskSelected(task: Task) {
    this.taskWasSelected.emit(task);
  }

}
