import { NextResponse } from 'next/server';
import prisma from '../../../util/prisma';

// Get all locations (GET /api/locations)
export async function GET() {
  try {
    const locations = await prisma.locations.findMany();
    return NextResponse.json({
      status: true,
      data: locations,
    });
  } catch (error) {
    console.error('Error fetching locations:', error.message);
    return NextResponse.json(
      { message: 'Failed to fetch locations', status: false, error: error.message },
      { status: 500 }
    );
  }
}

// Create a new location (POST /api/locations)
export async function POST(request) {
  try {
    const { name, description, slug, imageUrl, image_alt, image_caption, meta_title, meta_description, meta_keywords } = await request.json();

    // Create the new location
    const newLocation = await prisma.locations.create({
      data: {
        name,
        description,
        slug,
        imageUrl,
        image_alt,
        image_caption,
        meta_title,
        meta_description,
        meta_keywords,
      },
    });

    return NextResponse.json({ status: true, data: newLocation });
  } catch (error) {
    console.error('Error creating location:', error);
    return NextResponse.json(
      {
        message: 'Failed to create location',
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
