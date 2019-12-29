import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  public items: String[];

  constructor() { }

  ngOnInit() {
    this.items = ["Angular", "React"]
  }

}
