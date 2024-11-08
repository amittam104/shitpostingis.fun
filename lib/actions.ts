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

export async function generateGifsBySearch(query: string) {
  try {
    const url = `https://api.apileague.com/search-gifs?query=${query.replace(
      " ",
      "%20"
    )}&number=6`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": process.env.MEME_API_KEY || "",
      },
    });

    if (!response.ok) throw new Error("Failed to fetch gifs.");

    const data = await response.json();
    const gifs = data.images;

    return gifs;
  } catch (error) {
    console.log("Something went wrong in getting the gifs.", error);
  }
}
