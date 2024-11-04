"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageCircle, Repeat2, Share2, Sparkles } from "lucide-react";

export function Dashboard() {
  return (
    <div className=" bg-background">
      {/* Header */}

      {/* Main Content */}
      <div className=" mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="md:col-span-3">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4">
                  <Textarea
                    placeholder="Enter your text here..."
                    className="min-h-[200px] resize-none"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="outline">
                    <Sparkles className="mr-2 h-4 w-4" />
                    AI - Shitpost it
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-medium">
                    Your Credits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    3/6 credits remaining
                  </div>
                  <Progress value={50} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    Get more credits to keep shitposting
                  </p>
                  <Button className="w-full" variant="secondary">
                    Keep Shit Posting
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Middle Column */}
          <div className="md:col-span-5 space-y-4">
            <Card>
              <CardContent className="p-4">
                <Textarea
                  placeholder="Enter your text or paste a link here..."
                  className="min-h-[200px] resize-none"
                />
              </CardContent>
              <CardFooter className="justify-end">
                <Button variant="outline">Find meme/gif</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-3">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="h-36 w-36 md:h-40 md:w-40 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center"
                    >
                      {/* <Image className="h-8 w-8 text-muted-foreground" /> */}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Twitter Post Preview */}
          <div className="md:col-span-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src="/placeholder-avatar.jpg"
                      alt="@username"
                    />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">Display Name</p>
                    <p className="text-sm text-muted-foreground">@username</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="mb-2">
                  Your tweet content will appear here. It&apos;s a preview of
                  how your post will look on Twitter.
                </p>
                <div className="aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center mb-2">
                  <span className="text-muted-foreground">Image/GIF</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-4 w-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Repeat2 className="h-4 w-4" />
                  <span className="sr-only">Retweet</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
              </CardFooter>
            </Card>
            <div className="mt-4 flex justify-end">
              <Button>Post</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
