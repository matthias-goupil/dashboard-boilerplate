import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from '../models'

const queryClient = postgres(process.env.DATABASE_URL!)
export const db = drizzle({ client: queryClient, schema })
