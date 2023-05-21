import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service.ts.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  todo: Todo = {
    title: '',
    description: '',
    deadline: '',
    completed: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.fetchTodoDetails(id);
    }
  }

  fetchTodoDetails(id: string) {
    this.todoService.getTodoById(id).subscribe((todo) => {
      this.todo = { ...todo, deadline: this.formatDate(todo.deadline) };
    });
  }

  formatDate(date: string): string {
    // Format the date to "yyyy-MM-dd" format
    const formattedDate = new Date(date);
    const year = formattedDate.getFullYear();
    const month = ('0' + (formattedDate.getMonth() + 1)).slice(-2);
    const day = ('0' + formattedDate.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
  }

  submitForm() {
    if (this.todo.id) {
      this.updateTodo();
    } else {
      this.createTodo();
    }
  }

  createTodo() {
    // Convert the deadline to the expected format "yyyy-MM-dd"
    const formattedDeadline = this.formatDate(this.todo.deadline);

    this.todoService.createTodo({
      ...this.todo,
      deadline: formattedDeadline,
    }).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }

  updateTodo() {
    // Convert the deadline to the expected format "yyyy-MM-dd"
    const formattedDeadline = this.formatDate(this.todo.deadline);

    this.todoService.updateTodo({
      ...this.todo,
      deadline: formattedDeadline,
    }).subscribe(() => {
      this.router.navigate(['/todos']);
    });
  }

  cancel() {
    this.router.navigate(['/todos']);
  }
}