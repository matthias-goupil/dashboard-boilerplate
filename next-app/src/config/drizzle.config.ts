import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: '../drizzle',
  schema: './src/models/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
})
