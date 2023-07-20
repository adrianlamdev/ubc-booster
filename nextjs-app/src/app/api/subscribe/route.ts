import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../../prisma/client";

export async function POST(request: NextRequest) {
  // make sure body has email
  const json_req = await request.json();
  const email = json_req.email;
  //   put into db logic here
  try {
    const emailNewsSubscriber = await prisma.emailNewsSubscriber.create({
      data: {
        email: email,
      },
    });

    if (!emailNewsSubscriber) {
      return NextResponse.json({
        status: "error",
      });
    }

    return NextResponse.json({
      status: "success",
    });
  } catch (error) {
    console.error("Error adding email to db:", error);
    return NextResponse.json({
      status: "error",
    });
  }
}
