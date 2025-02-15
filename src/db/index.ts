import { sqliteTable } from 'drizzle-orm/sqlite-core';
import * as t from 'drizzle-orm/sqlite-core';

export const todos = sqliteTable('todos', {
  id: t.int().primaryKey({ autoIncrement: true }),
  title: t.text().notNull(),
  completed: t.int({ mode: 'boolean' }).default(false).notNull(),
  createdAt: t
    .int({ mode: 'timestamp_ms' })
    .$defaultFn(() => new Date())
    .notNull(),
  updatedAt: t
    .int({ mode: 'timestamp_ms' })
    .$defaultFn(() => new Date())
    .$onUpdateFn(() => new Date())
    .notNull(),
  deleteAt: t.int({ mode: 'timestamp_ms' }),
});
