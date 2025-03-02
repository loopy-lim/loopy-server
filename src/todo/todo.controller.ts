import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { CheckTodoParams, CreateTodoDto } from 'src/todo/dto/createTodoDto';
import { TodoService } from 'src/todo/todo.service';
import { UtilService } from 'src/util/util.service';

@Controller('todos')
export class TodoController {
  constructor(
    private readonly todoService: TodoService,
    private readonly utilService: UtilService,
  ) {}
  @Post()
  async create(@Body() createTodo: CreateTodoDto) {
    const result = await this.todoService.create(createTodo);
    return this.utilService.apiResponse(HttpStatus.CREATED, result);
  }

  @Get()
  async getAll() {
    const result = await this.todoService.getAll();
    return this.utilService.apiResponse(HttpStatus.OK, result);
  }
  @Post('completed/:id')
  async check(@Param() checkTodoParams: CheckTodoParams) {
    const result = await this.todoService.check(checkTodoParams.id);
    return this.utilService.apiResponse(HttpStatus.OK, result);
  }
}
