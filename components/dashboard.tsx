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
import { useCompletion } from "ai/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { generateGifsBySearch } from "@/lib/actions";
import { Input } from "./ui/input";

type User = {
  name: string | undefined;
  email: string | undefined;
  image: string | undefined;
};

export function Dashboard({
  user,
}: {
  // gifs: Array<{ url: string; width: number; height: number }>;
  user: User;
}) {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });
  const [tweet, setTweet] = useState("");
  const [gifs, setGifs] = useState<
    Array<{ url: string; width: number; height: number }>
  >([]);

  useEffect(() => {
    setTweet(completion);
  }, [completion]);

  return (
    <div className=" bg-background">
      {/* Header */}

      {/* Main Content */}
      <div className=" mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="md:col-span-3">
            <div className="space-y-4">
              <form onSubmit={handleSubmit}>
                <Card>
                  <CardContent className="p-4">
                    <Textarea
                      placeholder="Enter your text here..."
                      className="min-h-[200px] resize-none"
                      value={input}
                      onChange={handleInputChange}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button type="submit" className="w-full" variant="outline">
                      <Sparkles className="mr-2 h-4 w-4" />
                      AI - Shitpost it
                    </Button>
                  </CardFooter>
                </Card>
              </form>

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
                  value={completion}
                />
              </CardContent>
              <CardFooter className="flex justify-between gap-2">
                <form
                  action={async (formData) => {
                    const gifs = await generateGifsBySearch(
                      formData.get("query") as string
                    );
                    if (gifs) setGifs(gifs);
                  }}
                  className="flex items-center gap-2"
                >
                  <Input type="text" name="query" />
                  <Button variant="outline">Search gif</Button>
                </form>
                <Button>AI find gif</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-3">
                  {gifs?.map((gif) => {
                    return (
                      <div
                        key={gif.url}
                        className="h-36 w-36 relative md:h-40 md:w-40 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center"
                      >
                        <Image
                          src={gif.url}
                          alt="gif"
                          unoptimized
                          fill
                          className="object-cover p-2"
                        />
                      </div>
                    );
                  })}
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
                    <AvatarImage src={user?.image} alt={user?.name} />
                    <AvatarFallback>UN</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{user?.name}</p>
                    <p className="text-sm text-muted-foreground">@username</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <Textarea
                  placeholder="Your tweet content will appear here. It's a preview of
                  how your post will look on Twitter."
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                  className="h-32 resize-none border-none bg-none ring-offset-none focus-visible:ring-offset-0 outline-none focus-visible:ring-0 p-0 mt-4 mb-4 text-sm"
                />
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
