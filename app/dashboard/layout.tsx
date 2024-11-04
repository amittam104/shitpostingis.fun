import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {" "}
      <header className="border-b">
        <div className=" mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Shitpostingis.fun</h1>
          <Link href="/dashboard/profile">
            <Button variant="ghost" size="icon">
              <CircleUserRound className="h-6 w-6" />
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
