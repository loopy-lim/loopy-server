import 'dotenv/config';
import { defineConfig, Config } from 'drizzle-kit';

const config: Config = {
  out: './drizzle',
  schema: './src/db/index.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_FILE_NAME!,
  },
};

export default defineConfig(config);
