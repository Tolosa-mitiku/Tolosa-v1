import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  const iconPath = path.join(process.cwd(), 'public', 'logo-icon.jpg');
  
  try {
    const imageBuffer = fs.readFileSync(iconPath);
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('Icon not found', { status: 404 });
  }
}

