import { NextResponse } from 'next/server';
import prisma from '../../../../util/prisma';



export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        subcategories: true, // Fetch subcategories related to each category
      },
    });

    return NextResponse.json({ status: true, data: categories });
  } catch (error) {
    console.error('Error fetching categories and subcategories:', error);
    return NextResponse.json(
      {
        message: 'Failed to fetch data',
        status: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
