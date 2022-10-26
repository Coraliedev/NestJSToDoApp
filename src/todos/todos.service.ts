import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  todos = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
    },
  ];

  findAll(): any[] {
    return this.todos;
  }
}
