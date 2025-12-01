import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

if (!uri) {
  throw new Error('MONGODB_URI is not defined in .env.local');
}

if (!dbName) {
  throw new Error('MONGODB_DB is not defined in .env.local');
}

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri!);
  const db = client.db(dbName!);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
