"use server";

import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

// Sign in with Google server action
export async function signInWithGoogle() {
  const session = await auth();

  if (session?.user) redirect("/dashboard");

  await signIn("google", { redirectTo: "/dashboard" });
}

// Sign out user from Google
export async function signOutFromApp() {
  await signOut();
}
