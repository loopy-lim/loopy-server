import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilService {
  apiResponse<T>(
    statusCode: number,
    data: T,
    messages?: { message: string; property: string }[],
  ) {
    return {
      statusCode,
      messages,
      data,
    };
  }
}
