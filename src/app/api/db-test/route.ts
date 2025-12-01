import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    const count = await db.collection('test-collection').countDocuments();

    return NextResponse.json({
      ok: true,
      count,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false, message: 'DB connection failed' }, { status: 500 });
  }
}
