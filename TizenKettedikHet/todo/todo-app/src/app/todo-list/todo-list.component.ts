import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service.ts.service';
import { Todo } from '../todo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  showExpiredTodos: boolean = false;

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }

  fetchExpiredTodos() {
    if (this.showExpiredTodos) {
      this.fetchTodos(); // Fetch all TODOs
    } else {
      this.todoService.getExpiredTodos().subscribe((expiredTodos) => {
        this.todos = expiredTodos;
      });
    }
    this.showExpiredTodos = !this.showExpiredTodos; // Toggle the display flag
  }


  edit(todo: Todo) {
    this.router.navigate(['/todos', todo.id, 'edit']);
  }

  delete(todo: Todo) {
    if (todo.id) {
      this.todoService.deleteTodo(todo.id.toString()).subscribe(() => {

        this.todos = this.todos.filter((t) => t.id !== todo.id);
      });
    }
  }
  

  create() {
    this.router.navigate(['/todos/new']);
  }
}
