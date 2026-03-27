import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../../generated/prisma/client';

const host: string = process.env.DATABASE_HOST!
const user: string = process.env.DATABASE_USER!
const password: string = process.env.DATABASE_PASSWORD!
const database: string = process.env.DATABASE_NAME!
const connectionLimit: number = 5

if(!host || !user || !password || !database) {
  throw new Error()
}

const adapter = new PrismaMariaDb({
  host: host,
  user: user,
  password: password,
  database: database,
  connectionLimit: connectionLimit
});

const prisma = new PrismaClient({ adapter });

export default prisma