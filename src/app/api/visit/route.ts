import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { getKSTDateString } from '@/util/date';

const client = new MongoClient(process.env.MONGODB_URI as string);
const dbName = process.env.MONGODB_DB as string;

export async function GET(req: NextRequest) {
  const db = client.db(dbName);
  const today = getKSTDateString();
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? '0.0.0.0';

  // 하루 1회만 기록
  await db
    .collection('visitors')
    .updateOne(
      { date: today, ip },
      { $setOnInsert: { date: today, ip, ts: new Date() } },
      { upsert: true },
    );

  const todayCount = await db.collection('visitors').countDocuments({ date: today });
  const totalCount = await db.collection('visitors').countDocuments();
  return NextResponse.json({ today, todayCount, totalCount });
}
