import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const news = sqliteTable('news', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  title: text('title').notNull(),
  category: text('category').notNull(),
  date: text('date').notNull(),
  image: text('image').notNull(),
  excerpt: text('excerpt').notNull(),
});

export const management = sqliteTable('management', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  position: text('position').notNull(),
  initials: text('initials').notNull(),
});
