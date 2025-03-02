import { Inject, Injectable } from '@nestjs/common';
import { and, eq, isNull } from 'drizzle-orm';
import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import * as schema from 'src/db';

@Injectable()
export class TodoService {
  constructor(
    @Inject('DB')
    private readonly db: BetterSQLite3Database<typeof schema>,
  ) {}

  async create(data: { title: string }) {
    const result = await this.db.insert(schema.todos).values(data).returning();
    return result;
  }

  async getAll() {
    return this.db.query.todos.findMany({
      columns: { id: true, title: true, completed: true },
      where: (todos, { isNull }) => isNull(todos.deleteAt),
    });
  }

  async getOne(id: number) {
    return this.db.query.todos.findFirst({
      columns: { id: true, title: true, completed: true },
      where: (todos, { and, eq, isNull }) =>
        and(eq(todos.id, id), isNull(todos.deleteAt)),
    });
  }

  async check(id: number) {
    const todo = await this.getOne(id);

    const result = await this.db
      .update(schema.todos)
      .set({ completed: !todo?.completed })
      .where(and(eq(schema.todos.id, id), isNull(schema.todos.deleteAt)))
      .returning();

    const { id: resultId, completed, title } = result[0];

    return { id: resultId, completed, title };
  }
}
