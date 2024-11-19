import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";
// import dbConnect from "./lib/dbConnect";
// import { Credits } from "./models/credits.model";
// import { User } from "./models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Twitter],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({ session }) {
      try {
        // await dbConnect();

        // if (!session?.user?.email) {
        //   return session;
        // }

        // const user = await User.findOne({ email: session.user.email });

        // if (user) {
        //   return session;
        // }

        // const newUser = await User.create({
        //   fullName: session.user.name,
        //   email: session.user.email || "",
        // });

        // const createdCredits = await Credits.create({ credits: 6 });
        // newUser.credits = createdCredits._id;
        // await newUser.save();

        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
  },
});
