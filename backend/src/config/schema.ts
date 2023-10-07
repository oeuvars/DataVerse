import { mysqlTable, text, int, boolean } from 'drizzle-orm/mysql-core';
import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

export const blogs = mysqlTable('blogs', {
    id: int('id').primaryKey().autoincrement(),
    email: text('email').notNull(),
    password: text('password'),
    main_heading: text('main_heading'),
    main_paragraph: text('main_paragraph'),
    sub_heading_1: text('sub_heading_1'),
    para_1: text('para_1'),
    sub_heading_2: text('sub_heading_2'),
    para_2: text('para_2'),
    sub_heading_3: text('sub_heading_3'),
    para_3: text('para_3'),
    sub_heading_4: text('sub_heading_4'),
    para_4: text('para_4'),
    sub_heading_5: text('sub_heading_5'),
    para_5: text('para_5'),
    sub_heading_6: text('sub_heading_6'),
    para_6: text('para_6'),
    sub_heading_7: text('sub_heading_7'),
    para_7: text('para_7'),
    sub_heading_8: text('sub_heading_8'),
    para_8: text('para_8'),
    image_data: boolean('image_data'),
});

export type User = typeof blogs.$inferSelect;
export type NewUser = typeof blogs.$inferInsert;

const poolConnection = mysql.createPool({
    host: 'srv1000.hstgr.io',
    port: 3306,
    user: 'u581162093_oeuvars',
    database: 'u581162093_oeuvars',
    password: '/V09vx/S8m',
});

export const db = drizzle(poolConnection);
