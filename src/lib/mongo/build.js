import { ObjectId } from "mongodb";
import clientPromise from "../db.js";
import { getVariantBuilds } from "./variant_builds.js";
import { generateQuery } from "./utils.js";

let client;
let db;
let builds;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    builds = db.collection("builds");
  } catch (error) {
    throw "Can't connect to DB";
  }
}

(async () => {
  await init();
})();

export async function createBuild(build) {
  try {
    const result = await builds.insertOne(build);
    return result;
  } catch (error) {
    console.log(error);
  }
}

// update 
export async function updateBuild(id, build) {
  try {
    const result = await builds.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: build },
      { returnDocument: "after" }
    );
    return result.ops[0];
  } catch (error) {
    console.log(error);
  }
}

export async function deleteBuild(id) {
  try {
    const result = await builds.deleteOne( typeof id === 'string' ? { _id: new ObjectId(id) } : { _id: id } );
    return result;
  }
  catch (error) {
    console.log(error);
  }
}

export async function deleteBuilds(user_id=null) {
  try {
    if (builds == null) {
      await init();
    }
    const result = await builds.deleteMany(user_id ? { user_id } : {});
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getBuildById(id) {
  try {
    const build = await builds.findOne(new ObjectId(id));
    if (build) {
      const variants = await getVariantBuilds(typeof build._id === 'string' ? build._id : build._id.toString());
      build.variants = variants;
    }
    return build;
  } catch (error) {
    console.log(error);
  }
}

export async function getbuilds( filterParams = {}) {
  try {
    const paramsUseregexp = ["name"];

    const query = { ...generateQuery(filterParams, paramsUseregexp) };

    console.log("params" , query)

    const build = await builds.find(query).sort({ _id: -1 }).toArray();
    
    for (let i = 0; i < build.length; i++) {
      const variants = await getVariantBuilds(typeof build[i]._id === 'string' ? build[i]._id : build[i]._id.toString());
      build[i].variants = variants;
    }

    return build;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch builds'); // Optionally re-throw the error for further handling
  }
}








