import { auth } from "@/auth";
import { Signin } from "@/components/signin";
import { redirect } from "next/navigation";

async function page() {
  const session = await auth();

  if (session?.user) redirect("/dashboard");

  return <Signin />;
}

export default page;
