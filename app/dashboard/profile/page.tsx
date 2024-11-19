import { auth } from "@/auth";
import { Profile } from "@/components/profile";
import { getUser } from "@/lib/services";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();

  const [currentUser] = await getUser();

  if (!session?.user) redirect("/signin");

  const user = {
    ...session?.user,
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? undefined,
    image: session?.user?.image ?? undefined,
  };

  return <Profile user={user} currentUser={currentUser} />;
}

export default page;
