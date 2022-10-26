import { Body, Controller, Get, Post, Param, Patch, Delete } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interface/todo.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get(':id')
  findOne(@Param('id') id:number){
    return this.todosService.findOne(id);
  }
 
  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto) {
    this.todosService.create(newTodo);
  }

  @Patch (':id')
  updateTodo(@Param('id') id:string, @Body() updateTodo: CreateTodoDto){
    return this.todosService.update(id, updateTodo);
  }

  @Delete (':id')
  deleteTodo(@Param('id') id:string){
    return this.todosService.delete(id);
  }
}
