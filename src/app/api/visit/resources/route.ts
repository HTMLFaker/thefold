import { NextRequest, NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI as string);
const dbName = process.env.MONGODB_DB as string;

function ymd(d: Date) {
  return d.toISOString().slice(0, 10);
}

export async function POST(req: NextRequest) {
  const { totalBytes, byType, counts } = await req.json();
  const db = client.db(dbName);

  const date = ymd(new Date());
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '0.0.0.0';

  // 오늘/IP 문서에 누적
  await db.collection('resource_usage').updateOne(
    { date, ip },
    {
      $setOnInsert: { date, ip, createdAt: new Date() },
      $inc: {
        totalBytes: typeof totalBytes === 'number' ? totalBytes : 0,
        ...(byType
          ? Object.fromEntries(
              Object.entries(byType).map(([k, v]) => [`byType.${k}`, Number(v) || 0]),
            )
          : {}),
        ...(counts
          ? Object.fromEntries(
              Object.entries(counts).map(([k, v]) => [`counts.${k}`, Number(v) || 0]),
            )
          : {}),
      },
      $set: { updatedAt: new Date() },
    },
    { upsert: true },
  );

  return NextResponse.json({ ok: true });
}
