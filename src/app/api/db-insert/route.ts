import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function POST() {
  try {
    const { db } = await connectToDatabase();

    const result = await db.collection('test-collection').insertOne({
      message: 'hello mongo!',
      createdAt: new Date(),
    });

    return NextResponse.json({
      ok: true,
      insertedId: result.insertedId,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: 'Insert failed' }, { status: 500 });
  }
}
