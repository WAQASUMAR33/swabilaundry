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


export async function POST(request) {
  try {
    const { name, description, slug, imageUrl, image_alt, image_caption, meta_title, meta_description, meta_keywords } =
      await request.json();

    if (!name || !slug) {
      return NextResponse.json({ status: false, message: "Name and slug are required." }, { status: 400 });
    }

    // Check if a location with the same slug already exists
    const existingLocation = await prisma.locations.findUnique({ where: { slug } });
    if (existingLocation) {
      return NextResponse.json({ status: false, message: "Location with this slug already exists." }, { status: 409 });
    }

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

    return NextResponse.json({ status: true, data: newLocation }, { status: 201 });
  } catch (error) {
    console.error("Error creating location:", error);
    return NextResponse.json(
      { message: "Failed to create location", status: false, error: error.message },
      { status: 500 }
    );
  }
}
