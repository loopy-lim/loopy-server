import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { UtilService } from 'src/util/util.service';

@Module({
  providers: [TodoService, UtilService],
  controllers: [TodoController],
})
export class TodoModule {}
