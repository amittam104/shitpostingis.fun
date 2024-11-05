import { auth } from "@/auth";
import { Profile } from "@/components/profile";

async function page() {
  const session = await auth();

  if (!session?.user) throw new Error("User not authenticated");

  return <Profile user={session.user} />;
}

export default page;
