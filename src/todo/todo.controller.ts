import { Body, Controller, Get, Post } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post()
  create(@Body() data: { title: string }) {
    return this.todoService.create(data);
  }

  @Get()
  async getAll() {
    return this.todoService.getAll();
  }
}
