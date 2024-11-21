"use server";

import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";
import { createClient } from "@/utils/supabase/server";

// Sign in with Google server action
export async function signInWithGoogle() {
  const session = await auth();

  if (session?.user) redirect("/dashboard");

  await signIn("google", { redirectTo: "/dashboard" });
}

// Sign in with Google server action
export async function signInWithX() {
  const session = await auth();

  if (session?.user) redirect("/dashboard");

  await signIn("twitter", { redirectTo: "/dashboard" });
}

// Sign out user
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

export async function getGifSearchQueryByAi(query: string) {
  const { text } = await generateText({
    model: anthropic("claude-3-5-sonnet-20241022"),
    system: `You are an advanced AI assistant specialized in analyzing social media posts and determining appropriate GIF search keywords. Your task is to examine the given post, understand its tone, sentiment, and key themes, and then suggest relevant search terms for finding a matching GIF.
              
            When analyzing the post, consider the following aspects:
            Tone, Sentiment, Key themes, Cultural references
            Finally just return the search query which have some pop culture references or similar themes for finding a matching GIF and don't include any other text
            and don't always return sarcastic eye roll.`,
    prompt: query,
  });

  return text;
}

export async function updateCredits() {
  const supabase = await createClient();

  const { data: creditsNo, error: getCreditsError } = await supabase
    .from("user")
    .select("credits");

  if (getCreditsError) throw new Error("Could not fetch the credits data");

  const [{ credits }] = creditsNo;

  const { data, error } = await supabase
    .from("user")
    .update({ credits: credits - 1 })
    .eq("credits", credits)
    .select();

  if (error) throw new Error("Something went wrong while updating the credits");

  return data;
}
