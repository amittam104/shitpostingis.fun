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

export async function getGifsBySearch(query: string) {
  try {
    const url = `https://tenor.googleapis.com/v2/search?q=${query}&key=${process.env.TENOR_API}&limit=6`;

    const response = await fetch(url);

    const data = await response.json();
    console.log(data.results[0].media_formats.gif.url);
    const gifs = data.results;

    return gifs;
  } catch (error) {
    console.log("Something went wrong in getting the gifs.", error);
  }
}
