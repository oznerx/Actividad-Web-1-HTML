import { sql } from "@vercel/postgres"
import { drizzle as drizzleNode } from "drizzle-orm/node-postgres"
import { drizzle as drizzleVercel } from "drizzle-orm/vercel-postgres"

// replace db with, this way we use local DB for DEV and Vercel DB in PROD
export const db = isProd ? drizzleVercel(sql) : drizzleNode(client)
