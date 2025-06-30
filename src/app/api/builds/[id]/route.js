import { MongoError } from "mongodb";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { deleteBuild, getBuildById, updateBuild } from "@/lib/mongo/build";
import { buildSchema } from "@/schemas/build";
import {
  createVariantBuild,
  deleteVariantByBuildId,
  getVariantBuildById,
  getVariantBuilds,
  updateVariantBuild,
} from "@/lib/mongo/variant_builds";
import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

export async function GET(req, res) {
  // const session = await getServerSession({ req: req, ...authOptions });
  try {
    const { id } = res.params;
    const build = await getBuildById(id);
    // check if user id 
    return NextResponse.json(build);
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(request, res) {
  const session = await getServerSession({ req: request, ...authOptions });
  try {

    if (!session) {
      return NextResponse.json(
        { message: "You need to be logged in to update a build" },
        { status: 401 }
      );
    }

    const { id } = res.params;
    const data = await request.json();
    const build = buildSchema.parse(data);

    await updateBuild(id, build);

    await deleteVariantByBuildId(id);

    data.variants.forEach(async (variant) => {
      // remove _id  from variant
      delete variant._id;
      createVariantBuild(variant, id);
    });

    return NextResponse.json(
      { message: "Build updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ message: error.errors }, { status: 400 });
    } else if (error instanceof MongoError) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    } else {
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
    }
  }
}

export async function DELETE(res, req) {
  try {
    const { id } = req.params;
    await deleteBuild(id);
    await deleteVariantByBuildId(id);
    return NextResponse.json(
      { message: "Build deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
