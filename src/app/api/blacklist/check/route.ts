import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI as string);
const dbName = process.env.MONGODB_DB as string;

export async function GET(req: NextRequest) {
  const ip = req.nextUrl.searchParams.get('ip');
  if (!ip) {
    return NextResponse.json({ blocked: false });
  }

  const db = client.db(dbName);
  const found = await db.collection('ip_blacklist').findOne({ ip });

  return NextResponse.json({ blocked: !!found });
}
