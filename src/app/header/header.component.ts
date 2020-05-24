import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() commandSelected = new EventEmitter<string>();

  onSelect(command: string){
    this.commandSelected.emit(command);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
