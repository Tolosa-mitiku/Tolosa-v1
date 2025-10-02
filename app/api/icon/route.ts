import { NextResponse } from 'next/server';
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  try {
    const logoPath = join(process.cwd(), 'public', 'logo-icon.jpg');
    const logoBuffer = readFileSync(logoPath);

    // Create circular mask
    const size = 512;
    const circleBuffer = Buffer.from(
      `<svg width="${size}" height="${size}">
        <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
      </svg>`
    );

    // Process image: resize, composite with circle mask
    const circularIcon = await sharp(logoBuffer)
      .resize(size, size, { fit: 'cover' })
      .composite([
        {
          input: circleBuffer,
          blend: 'dest-in',
        },
      ])
      .png()
      .toBuffer();

    return new NextResponse(circularIcon, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error generating icon:', error);
    return new NextResponse('Error generating icon', { status: 500 });
  }
}

