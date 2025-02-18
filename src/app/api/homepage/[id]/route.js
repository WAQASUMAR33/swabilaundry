import { NextResponse } from 'next/server';
import prisma from '../../../../util/prisma';

// GET a single HomePage record by ID
export async function GET(request, { params }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID provided' }, { status: 400 });
  }

  try {
    const homePage = await prisma.homePage.findUnique({
      where: { id },
    });

    if (!homePage) {
      return NextResponse.json({ error: 'HomePage record not found' }, { status: 404 });
    }

    return NextResponse.json(homePage);
  } catch (error) {
    console.error('Error fetching HomePage record:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// UPDATE a HomePage record by ID
export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    const {
      slug,
      meta_title,
      meta_description,
      meta_keywords,
      heading1,
      heading2,
      heading3,
      heading4,
      content1,
      content2,
      content3,
      content4,
      img1,
      img2,
      img3,
      img4,
      others,
    } = data;
    
    const id = parseInt(params.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID provided' }, { status: 400 });
    }

    const updatedHomePage = await prisma.homePage.update({
      where: { id },
      data: {
        slug,
        meta_title,
        meta_description,
        meta_keywords,
        heading1,
        heading2,
        heading3,
        heading4,
        content1,
        content2,
        content3,
        content4,
        img1,
        img2,
        img3,
        img4,
        others,
      },
    });

    return NextResponse.json(updatedHomePage);
  } catch (error) {
    console.error('Error updating HomePage record:', error);
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'HomePage record not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// DELETE a HomePage record by ID
export async function DELETE(request, { params }) {
  const id = parseInt(params.id);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID provided' }, { status: 400 });
  }

  try {
    await prisma.homePage.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'HomePage record deleted successfully' });
  } catch (error) {
    console.error('Error deleting HomePage record:', error);
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'HomePage record not found' }, { status: 404 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
