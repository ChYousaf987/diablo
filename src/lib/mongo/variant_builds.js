import { ObjectId } from "mongodb";
import clientPromise from "../db.js";

let client;
let db;
let variant_builds;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    variant_builds = db.collection("variant_builds");
  } catch (error) {
    throw "Can't connect to DB";
  }
}

(async () => {
  await init();
})();

export async function createVariantBuild(variantBuild ,  build_id) {
  try {
    variantBuild.build_id = build_id;
    const result = await variant_builds.insertOne(variantBuild);
    console.log(result);
    return result.ops[0];
  } catch (error) {
    console.log(error);
  }
}

// update
export async function updateVariantBuild(id, variantBuild) {
  try {
    const result = await variant_builds.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: variantBuild },
      { returnDocument: "after" }
    );
    return result.ops[0];
  } catch (error) {
    console.log(error);
  }
}

export async function deleteVariantBuild(id) {
  try {
    const result = await variant_builds.deleteOne({ _id: new ObjectId(id) });
    return result;
  }
  catch (error) {
    console.log(error);
  }
}

export async function deleteVariantByBuildId(id) {
  try {
    if (variant_builds == null) {
      await init();
    }
    const result = await variant_builds.deleteMany({ build_id: id });
    return result;
  }
  catch (error) {
    console.log(error);
  }
}


export async function getVariantBuildById(id) {
  try {
    const result = await variant_builds.findOne(new ObjectId(id));
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getVariantBuilds(build_id=null){
  try {

    const result = await variant_builds.find( build_id ? { build_id: build_id } : {}).toArray();
    return result;
  } catch (error) {
    console.log(error);
  }
}






