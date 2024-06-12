import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
      select: {
        role: true,
      },
    });
    if (user?.role[0] === "user") {
      return NextResponse.json(user.role[0]);
    }
    if (user?.role[0] === "teacher") {
      return NextResponse.json(user.role[0]);
    }
    return NextResponse.json("success");
  } catch (error) {
    console.log(error);
    return NextResponse.json("error");
  }
}
