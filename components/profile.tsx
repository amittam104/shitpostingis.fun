"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft } from "lucide-react";
import { signOutFromApp } from "@/lib/actions";

type User = {
  name: string | undefined;
  email: string | undefined;
  image: string | undefined;
};

type currentUser = {
  name: string | undefined;
  email: string | undefined;
  credits: number | undefined;
};

export function Profile({
  user,
  currentUser,
}: {
  user: User;
  currentUser: currentUser;
}) {
  const creditsPercentage = currentUser?.credits
    ? (currentUser.credits / 20) * 100
    : 0;

  return (
    <div className=" bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Back to Home Link */}
          <Link
            href="/dashboard"
            className="inline-flex items-center text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>

          {/* Profile Header */}
          <div className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4">
              <AvatarImage src={user?.image || ""} alt="Profile picture" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold">{user?.name || "username"}</h1>
            <p className="text-muted-foreground">
              {user?.name?.toLowerCase().split(" ").join("")}
            </p>
          </div>

          {/* Update Profile and Credits Section */}
          <div className="flex justify-center ">
            {/* Update Profile Form */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="text-lg">Update Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="x-profile">X-profile</Label>
                    <Input id="x-profile" placeholder="Enter your X profile" />
                  </div>
                  <div className="flex justify-end">
                    <Button type="submit">Update</Button>
                  </div>
                </form>
              </CardContent>
            </Card> */}

            {/* Credits Section */}
            <Card className="w-[28rem]">
              <CardContent className="p-6">
                <h2 className="font-semibold mb-4">Your Credits</h2>
                <div className="space-y-4 mb-8">
                  <div className="text-sm text-muted-foreground">
                    {currentUser.credits}/20 credits remaining
                  </div>
                  <Progress value={creditsPercentage} className="h-2" />
                  <div className="flex flex-col space-y-2">
                    {/* <p className="text-sm text-muted-foreground">
                      Get more credits to keep shitposting
                    </p> */}
                    {/* <Button variant="secondary">Keep Shit Posting</Button> */}
                  </div>
                </div>
                <div className="flex justify-end">
                  <form action={signOutFromApp}>
                    <Button type="submit">Sign Out</Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
