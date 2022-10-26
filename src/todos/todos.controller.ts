import { Body, Controller, Get, Post } from '@nestjs/common';
import { Todo } from './interface/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo){
    console.log(newTodo);
    this.todosService.create(newTodo);
  }
}
