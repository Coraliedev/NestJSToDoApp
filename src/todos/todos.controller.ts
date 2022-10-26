import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Todo } from './interface/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id:string){
    return this.todosService.findOne(id);
  }

  
  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo){
    this.todosService.create(newTodo);
  }
}
