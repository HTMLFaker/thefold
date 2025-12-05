import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI as string);
const dbName = process.env.MONGODB_DB as string;

export async function POST(req: NextRequest) {
  const { ip } = await req.json();
  if (!ip) {
    return NextResponse.json({ ok: false, error: 'ip required' }, { status: 400 });
  }

  const db = client.db(dbName);
  await db
    .collection('ip_blacklist')
    .updateOne({ ip }, { $setOnInsert: { ip, createdAt: new Date() } }, { upsert: true });

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { ip } = await req.json();
  if (!ip) {
    return NextResponse.json({ ok: false, error: 'ip required' }, { status: 400 });
  }

  const db = client.db(dbName);
  await db.collection('ip_blacklist').deleteOne({ ip });

  return NextResponse.json({ ok: true });
}
