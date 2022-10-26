import { Injectable } from '@nestjs/common';
import { Todo } from './interface/todo.interface';

@Injectable()
export class TodosService {
  todos: Todo[] = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      done: false,
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
      done: true,
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Description 3',
      done: false,
    },
  ];

  findAll(): Todo[] {
    return this.todos;
  }
  create(newTodo: Todo) {
    this.todos.push(newTodo);
  }
}
