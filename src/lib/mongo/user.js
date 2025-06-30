import { getServerSession } from "next-auth";
import clientPromise from "../db.js";
import bcrypt from "bcrypt";
import authOptions from "@/lib/auth";

let client;
let db;
let users;
const saltRounds = 10;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db();
    users = db.collection("users");
  } catch (error) {
    throw "Can't connect to DB";
  }
}

(async () => {
  await init();
})();

export async function createUser(user) {
  const { password, ...res } = user;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const result = await users.insertOne({ password: hashedPassword, ...res });
  return result.ops[0];
}

export async function getUserWithEmail(email) {
  try {
    const user = await users.findOne({ email });

    if (!user) return null;
    return user;
  } catch (error) {
    return undefined;
  }
}

// get user by session

export async function getUserBySession(req, res) {
  try {
    const session = await getServerSession({ req, res, authOptions });
    if (!session) {
      return null;
    }
    const user = await getUserWithEmail(session.user.email);
    return user;
  } catch (error) {
    return null;
  }
}
