import { auth } from "@/auth";
import { Dashboard } from "@/components/dashboard";

async function page() {
  const session = await auth();

  const user = {
    ...session?.user,
    name: session?.user?.name ?? "",
    email: session?.user?.email ?? undefined,
    image: session?.user?.image ?? undefined,
  };

  return <Dashboard user={user} />;
}

export default page;
