import { Provider } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

export const sqlLiteProvider: Provider = {
  provide: 'DATA_SOURCE',
  useFactory: () => {
    const sqlite = new Database('sqlite.db');
    return drizzle(sqlite);
  },
};
