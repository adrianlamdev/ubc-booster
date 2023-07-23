import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(req: NextRequest) {

    const gpaBoosters = await prisma.courseBooster.findMany({
      where: {
        level: 100,
      },
      orderBy: {
        overall: "desc",
      }
    });

  return NextResponse.json({
    status: "success",
    boosters: gpaBoosters,
  });
}
