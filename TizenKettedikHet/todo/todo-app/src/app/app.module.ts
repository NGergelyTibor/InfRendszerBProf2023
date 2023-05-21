import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todos/new', component: TodoFormComponent },
  { path: 'todos/:id/edit', component: TodoFormComponent }, // Add this line for the edit route
  { path: 'todos/:id', component: TodoDetailsComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailsComponent,
    TodoFormComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
