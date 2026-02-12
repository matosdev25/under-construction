import { NextResponse } from 'next/server';

// Health check endpoint
export async function GET(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/api/health' || path === '/api') {
    return NextResponse.json({
      status: 'ok',
      message: 'MatosDev Under Construction API',
      timestamp: new Date().toISOString()
    });
  }

  return NextResponse.json(
    { error: 'Not Found' },
    { status: 404 }
  );
}

export async function POST(request) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT(request) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE(request) {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
