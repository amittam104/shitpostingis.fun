import { auth } from "@/auth";
import { Profile } from "@/components/profile";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();

  if (!session?.user) redirect("/signin");

  return <Profile user={session.user} />;
}

export default page;
