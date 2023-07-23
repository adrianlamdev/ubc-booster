import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API working!",
  });
}
