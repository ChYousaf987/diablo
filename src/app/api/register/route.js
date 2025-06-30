import { registerUser } from "@/schemas/user";
import { createUser } from "@/lib/mongo/user";
import { MongoError } from "mongodb";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request) {
  try {
    const user = registerUser.parse(request.body);
    await createUser(user);
    return new NextResponse.json(
      {
        message: "User created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return new NextResponse.json(
        {
          message: error.errors,
        },
        {
          status: 400,
        }
      );
    } else if (error instanceof MongoError) {
      return new NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 400,
        }
      );
    } else {
      return new NextResponse.json(
        {
          message: "Something went wrong",
        },
        {
          status: 500,
        }
      );
    }
  }
}
