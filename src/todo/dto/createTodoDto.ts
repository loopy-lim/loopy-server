import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString({
    message: 'Title must be a string',
  })
  @IsNotEmpty({
    message: 'Title is required',
  })
  title: string;
}

export class CheckTodoParams {
  @IsNumberString()
  @IsNotEmpty({
    message: 'Id is required',
  })
  id: number;
}
