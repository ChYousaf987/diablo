import { MongoError } from "mongodb";
import { NextResponse } from "next/server";
import { buildSchema } from "@/schemas/build";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";
import { getUserBySession } from "@/lib/mongo/user";
import { getbuilds, createBuild } from "@/lib/mongo/build";
import { createVariantBuild, getVariantBuildById, getVariantBuilds } from "@/lib/mongo/variant_builds";

export async function GET(request , res) {
  try {
    
    const paramsObject = Object.fromEntries(request.nextUrl.searchParams.entries());
    
    const buildsList = await getbuilds(paramsObject);

    return NextResponse.json(buildsList, { status: 200 });
  } catch (error) {
    console.log("error" , error)
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

export async function POST(request, res) {
  try {
    const data = await request.json();

    const buildJson = buildSchema.parse(data);
    const build = await createBuild(buildJson);
    data.variants.forEach(async (variant) => {
       createVariantBuild(variant, build.insertedId.toString());
    });

    return NextResponse.json(
      {
        message: "Build created successfully",
        build_id: build.insertedId,
      },
      {
        status: 201,
      }
    );
  } catch (error) {

    console.log("error", error);
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          errors: error.errors,
        },
        {
          status: 400,
        }
      );
    } else if (error instanceof MongoError) {
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
