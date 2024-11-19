import { auth } from "@/auth";
import { Dashboard } from "@/components/dashboard";
import { getUser } from "@/lib/services";

async function page() {
  const session = await auth();

  const [currentUser] = await getUser();

  const user = {
    ...session?.user,
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? undefined,
    image: session?.user?.image ?? undefined,
  };

  return <Dashboard user={user} currentUser={currentUser} />;
}

export default page;
