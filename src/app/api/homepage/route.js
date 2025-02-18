import { NextResponse } from 'next/server';
import prisma from '../../../util/prisma';

// Create a new HomePage record
export async function POST(request) {
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
      others
    } = data;

    console.log("Data received:", data);

    // Create a new HomePage record in the database
    const newHomePage = await prisma.homePage.create({
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

    return NextResponse.json(newHomePage, { status: 201 });
  } catch (error) {
    console.error('Error Creating HomePage Record:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// Fetch all HomePage records
export async function GET() {
  try {
    const homePages = await prisma.homePage.findMany();
    console.log("HomePage records:", homePages);
    return NextResponse.json(homePages);
  } catch (error) {
    console.error('Error fetching HomePage records:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
