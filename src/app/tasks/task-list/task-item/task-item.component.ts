import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() taskSelected = new EventEmitter<void>();

  onClick() {
    this.taskSelected.emit();
  }
  
  constructor() { }

  ngOnInit(): void {
  }


}
