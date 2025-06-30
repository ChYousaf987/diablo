
import { MongoError } from "mongodb";
import { NextResponse } from "next/server";
import { getVariantBuilds } from "@/lib/mongo/variant_builds";

export async function GET(request, res) {
  try {
    const buildsList = await getVariantBuilds();


    return NextResponse.json(buildsList, { status: 401 });
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
