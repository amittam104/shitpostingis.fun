import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  if (!session?.user) redirect("/signin");

  return (
    <div>
      {" "}
      <header className="border-b">
        <div className=" mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-semibold">Shitpostingis.fun</h1>
          </Link>
          <Link href="/dashboard/profile">
            <Button variant="ghost" size="icon">
              {session?.user ? (
                <Image
                  src={session.user.image ?? ""}
                  alt={session.user.name ?? "User avatar"}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <CircleUserRound className="h-6 w-6" />
              )}
              <span className="sr-only">User profile</span>
            </Button>
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default layout;
