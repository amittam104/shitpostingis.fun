"use server";

import { signIn, signOut } from "@/auth";

// Sign in with Google server action
export async function signInWithGoogle() {
  await signIn("google", { redirectTo: "/dashboard" });
}

// Sign out user from Google
export async function signOutFromGoogle() {
  await signOut();
}
