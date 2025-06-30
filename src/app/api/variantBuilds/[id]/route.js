import { deleteVariantBuild } from "@/lib/mongo/variant_builds";
import { NextResponse } from "next/server";


export async function DELETE( res , req) {
  try {
    const {id} = req.params;
    await deleteVariantBuild(id);
    return NextResponse.json({message: "Build deleted successfully",},{status: 200});
  } catch (error) {
    return NextResponse.json({message: "Something went wrong",},{status: 500});
  }
}


