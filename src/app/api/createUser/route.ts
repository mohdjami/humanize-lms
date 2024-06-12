import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { z } from "zod";
import { UserSchema } from "@/app/validations/user";
import { Role } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password, role } = UserSchema.parse(body);
    const extistingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });

    if (extistingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "user with this email already exist" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: [role as Role],
      },
    });
    const { password: newhashedPassword, ...rest } = newUser;
    return NextResponse.json(
      {
        user: rest,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { user: null, message: "something went wrong" },
      { status: 500 }
    );
  }
}
