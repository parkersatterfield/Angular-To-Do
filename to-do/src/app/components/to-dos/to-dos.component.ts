import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todos'

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  title = "Things I need To Do";
  todos!:Todo[];
  newTodo:string = ""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First to do',
        completed: false
      },
      {
        content: 'Second to do',
        completed: true
      }
    ]
  }

  toggleComplete(id) {
    this.todos.map((completed, i) => {
      if(id===i) {
        completed.completed = !completed.completed
      }
      return completed;
    })
  }

  addTodo() {
    this.todos.push({
      content: this.newTodo,
      completed: false
    })
    this.newTodo="";
  }

}
