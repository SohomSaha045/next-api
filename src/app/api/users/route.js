import { user } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  let payload = await request.json();
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json({ status: "no payload" }, { status: 501 });
  }
  return NextResponse.json(
    {
      Name: payload.name,
      Age: payload.age,
      Email: payload.email,
      Status: "User Craeted",
    },
    { status: 201 }
  );
}
