import { createClient } from "@/utils/supabase/server";

export async function getUser() {
  const supabase = await createClient();

  const { data: user, error } = await supabase.from("user").select("*");

  if (error) throw new Error("Could not get the user data");

  return user;
}
