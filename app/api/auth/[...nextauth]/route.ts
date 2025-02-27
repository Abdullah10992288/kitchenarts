import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import ConnectToDb from "@/utils/ConnectToDb";
import Admin from "@/models/AdminModel";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        const { email, password } = await credentials;
        try {
          await ConnectToDb();
          const user = await Admin.findOne({ email });
          if (!user) {
            return null;
          }
          const compare = await bcrypt.compare(password, user.password);
          if (!compare) {
            return null;
          }
          return user;
        } catch (error) {
          console.log(error);
          throw new Error("Failed To SignIn The User");
        }
      },
    }),
  ],
  Session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: `${process.env.SITE_URL}/login`,
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
