import { createClient } from "@supabase/supabase-js";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Twitter],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user }) {
      const supabase = await createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      console.log("User:", user);

      const { data: existingUser } = await supabase
        .from("user")
        .select("*")
        .eq("email", user.email);

      if (existingUser?.length === 0) {
        const { data, error } = await supabase
          .from("user")
          .insert([
            {
              name: user?.name,
              email: user?.email,
              credits: 10,
            },
          ])
          .select();

        if (error)
          throw new Error("Something went wrong while registering user");

        console.log(data);
      }

      return true;
    },
    async session({ session }) {
      try {
        return session;
      } catch (error) {
        console.error("Session callback error:", error);
        return session;
      }
    },
  },
});
