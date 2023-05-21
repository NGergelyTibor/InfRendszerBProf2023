import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo.service.ts.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css'],
})
export class TodoDetailsComponent implements OnInit {
  todo!: Todo;

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
      this.todo = todo;
    });
  }

  goBack() {
    this.router.navigate(['/todos']);
  }
}
