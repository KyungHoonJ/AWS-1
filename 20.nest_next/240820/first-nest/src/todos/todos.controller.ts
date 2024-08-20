import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Todo {
    return this.todosService.findOne(id);
  }

  @Post()
  create(@Body() todo: Omit<Todo, 'id'>): Todo {
    return this.todosService.create(todo);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() todoUpdates: Partial<Todo>): Todo {
    return this.todosService.update(id, todoUpdates);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    this.todosService.remove(id);
  }
}
