import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
// Service로 간주, 주입될 수 있음, 전역에서 싱글톤으로 관리
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  findAll = (): Todo[] => {
    return this.todos;
  };

  findOne = (id: number): Todo => {
    const todo = this.todos.find((item) => item.id === id);
    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not fount`);
    }
    return todo;
  };

  create = (todo: Omit<Todo, 'id'>): Todo => {
    const newTodo = {
      id: this.idCounter++,
      ...todo,
      completed: false,
    };
    this.todos.push(newTodo);
    return newTodo;
  };

  update = (id: number, todoUpdates: Partial<Todo>): Todo => {
    const todo = this.findOne(id);
    Object.assign(todo, todoUpdates);
    return todo;
  };

  remove = (id: number): void => {
    const index = this.todos.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Todo with id ${id} not fount`);
    }
    this.todos.splice(index, 1);
  };
}
