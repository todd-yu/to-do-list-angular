import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { toDo } from '../sharedAssets/to-do.model';

@Component({
  selector: 'app-to-do-list-edit',
  templateUrl: './to-do-list-edit.component.html',
  styleUrls: ['./to-do-list-edit.component.css']
})
export class ToDoListEditComponent implements OnInit {
  @ViewChild('nameInput', {static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;
  @Output() toDoAdded = new EventEmitter<toDo>();

  constructor() { }

  ngOnInit(): void {
  }

  AddItemClick() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const newToDo = new toDo(name, amount);
    this.toDoAdded.emit(newToDo);
  }

}
