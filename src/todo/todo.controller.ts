import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { TodoService } from 'src/todo/todo.service';
import { UtilService } from 'src/util/util.service';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly utilService: UtilService,
  ) {}
  @Post()
  async create(@Body() data: { title: string }) {
    const result = await this.todoService.create(data);
    return this.utilService.apiResponse(HttpStatus.CREATED, result);
  }

  @Get()
  async getAll() {
    const result = await this.todoService.getAll();
    return this.utilService.apiResponse(HttpStatus.OK, result);
  }
}
