import { MongoError } from "mongodb";
import { NextResponse } from "next/server";
import {deleteBuilds } from "@/lib/mongo/build";

export async function GET(request , res) {
  try {
    
    const buildsList = await deleteBuilds();

    return NextResponse.json(buildsList, { status: 200 });
  } catch (error) {
    if (error instanceof MongoError) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    } else {
      return NextResponse.json(
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

