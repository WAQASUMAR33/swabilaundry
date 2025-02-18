import { NextResponse } from 'next/server';
import prisma from '../../../../util/prisma';

// Get location by slug (GET /api/locations/[slug])
export async function GET(request, { params }) {
  
  const slug  = params.id;

  if (!slug) {
    return NextResponse.json(
      { message: 'Slug is required', status: false },
      { status: 400 }
    );
  }

  try {
    // Fetch the location by its slug
    const location = await prisma.locations.findUnique({
      where: { slug },
    });

    if (!location) {
      return NextResponse.json(
        { message: 'Location not found', status: false },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: true, data: location });
  } catch (error) {
    console.error('Error fetching location:', error);
    return NextResponse.json(
      { message: 'Failed to fetch location', status: false, error: error.message },
      { status: 500 }
    );
  }
}


//----------------------------------------------------------------------------------------

export async function PUT(request, { params }) {
  try {
    const slug = params.id; // ✅ FIX: Access slug directly

    if (!slug) {
      return NextResponse.json(
        { message: "Slug is required", status: false },
        { status: 400 }
      );
    }

    const { name, description, imageUrl, image_alt, image_caption, meta_title, meta_description, meta_keywords } = await request.json();

    // ✅ Ensure the location exists before updating
    const existingLocation = await prisma.locations.findUnique({
      where: { slug },
    });

    if (!existingLocation) {
      return NextResponse.json(
        { message: "Location not found", status: false },
        { status: 404 }
      );
    }

    // ✅ Perform the update
    const updatedLocation = await prisma.locations.update({
      where: { slug },
      data: {
        name,
        description,
        imageUrl,
        image_alt,
        image_caption,
        meta_title,
        meta_description,
        meta_keywords,
      },
    });

    return NextResponse.json(updatedLocation);
  } catch (error) {
    console.error("❌ Error updating location:", error);
    return NextResponse.json(
      {
        message: "Failed to update location",
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// Delete a location by slug (DELETE /api/locations/[slug])
export async function DELETE(request, { params }) {
  try {
    const slug = params.id; // ✅ FIX: Access slug directly

    if (!slug) {
      return NextResponse.json(
        { message: 'Slug is required', status: false },
        { status: 400 }
      );
    }

    // Check if the location exists
    const existingLocation = await prisma.locations.findUnique({
      where: { slug },
    });

    if (!existingLocation) {
      return NextResponse.json(
        { message: 'Location not found', status: false },
        { status: 404 }
      );
    }

    // Delete the location
    await prisma.locations.delete({
      where: { slug },
    });

    return NextResponse.json({ message: 'Location deleted successfully' });
  } catch (error) {
    console.error('Error deleting location:', error);
    return NextResponse.json(
      {
        message: 'Failed to delete location',
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}