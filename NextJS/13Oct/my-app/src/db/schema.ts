import { integer, pgTable, text, timestamp,} from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().notNull().generatedAlwaysAsIdentity(),
  email: text('email').unique().notNull(),
  password: text('password').notNull(),
  role: text('role').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});