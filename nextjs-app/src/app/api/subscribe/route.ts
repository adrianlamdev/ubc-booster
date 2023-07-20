import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // make sure header has cookies, body has email
  const body = await request.body.json();
  console.log(body);
  return NextResponse.json({
    message: "API working!",
  });
}
