import { Injectable } from '@angular/core';
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  private todos: Todo[] = [];
  private nextId = 1;

  getTodos(): Todo[] {
    return this.todos;
  }

  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.nextId++,
      title: title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  toggleTodoCompletion(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}