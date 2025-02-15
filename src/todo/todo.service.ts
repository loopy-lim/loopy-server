import { Inject, Injectable } from '@nestjs/common';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import * as schema from 'src/db';

@Injectable()
export class TodoService {
  constructor(
    @Inject('DB')
    private readonly db: BetterSQLite3Database<typeof schema>,
  ) {}

  create(data: { title: string }) {
    const result = this.db.insert(schema.todos).values(data).returning();
    return result.get().id;
  }

  async getAll() {
    return this.db.query.todos.findMany({
      columns: { id: true, title: true, completed: true },
      where: (todos, { isNull }) => isNull(todos.deleteAt),
    });
  }
}
