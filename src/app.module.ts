import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleBetterSQLiteModule } from '@knaadh/nestjs-drizzle-better-sqlite3';
import { TodoModule } from './todo/todo.module';
import * as schema from './db';

@Module({
  imports: [
    DrizzleBetterSQLiteModule.register({
      tag: 'DB',
      sqlite3: {
        filename: 'db.sqlite',
      },
      config: { schema: { ...schema } },
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
