import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./db";

const googleClientId = process.env.GOOGLE_CLIENT
  ? process.env.GOOGLE_CLIENT
  : "";
const googleClientSecret = process.env.GOOGLE_SECRET
  ? process.env.GOOGLE_SECRET
  : "";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user ,account }) {
      if(account) {
        token.accessToken = account.access_token
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
    verifyRequest: "/",
  },
};

export default authOptions;
