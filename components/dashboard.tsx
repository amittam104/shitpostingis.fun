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
import { getGifsBySearch, getGifSearchQueryByAi } from "@/lib/actions";
import { useCompletion } from "ai/react";
import { Info, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type User = {
  name: string | undefined;
  email: string | undefined;
  image: string | undefined;
};

export function Dashboard({ user }: { user: User }) {
  const { completion, input, handleInputChange, handleSubmit } = useCompletion({
    api: "/api/completion",
  });
  const [tweet, setTweet] = useState("");
  const [gifs, setGifs] = useState<
    Array<{
      media_formats: {
        gif: {
          url: string;
        };
      };
      width: number;
      height: number;
    }>
  >([]);
  const [selectedGif, setSelectedGif] = useState<{
    media_formats: {
      gif: {
        url: string;
      };
    };
    width: number;
    height: number;
  } | null>(null);
  const [isGeneratingGif, setIsGeneratingGif] = useState(false);
  const [isGeneratingShitPost, setIsGeneratingShitPost] = useState(false);

  useEffect(() => {
    setTweet(completion);
    if (completion) setIsGeneratingShitPost(false);
  }, [completion]);

  return (
    <div className=" bg-background">
      {/* Header */}

      {/* Main Content */}
      <div className=" mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="md:col-span-3">
            <div className="space-y-4 flex flex-col justify-between h-full">
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsGeneratingShitPost(true);
                  handleSubmit();

                  // if (completion) setIsGeneratingShitPost(false);
                }}
              >
                <Card>
                  <h2 className="px-4 pt-3 text-sm font-semibold">
                    Write a post or any topic you want
                  </h2>
                  <CardContent className="p-4">
                    <Input
                      placeholder="Enter your post or topic here..."
                      className="resize-none"
                      value={input}
                      onChange={handleInputChange}
                    />
                  </CardContent>
                  <CardFooter>
                    <Button
                      disabled={!input}
                      type="submit"
                      className="w-full disabled:bg-slate-300"
                      variant="default"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {isGeneratingShitPost
                        ? "Generating..."
                        : `AI - Shitpost it`}
                    </Button>
                  </CardFooter>
                </Card>
              </form>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-semibold">
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
                    setIsGeneratingGif(true);
                    const gifs = await getGifsBySearch(
                      formData.get("query") as string
                    );
                    if (gifs) setGifs(gifs);
                    setIsGeneratingGif(false);
                  }}
                  className="flex items-center gap-2"
                >
                  <Input
                    disabled={isGeneratingGif}
                    autoComplete="off"
                    type="text"
                    name="query"
                  />
                  <Button disabled={isGeneratingGif} variant="outline">
                    {isGeneratingGif ? "Finding Gifs..." : `Search gif`}
                  </Button>
                </form>
                <Button
                  disabled={completion === "" || isGeneratingGif}
                  className="disabled:bg-slate-300"
                  onClick={async () => {
                    setIsGeneratingGif(true);
                    const querybyAI = await getGifSearchQueryByAi(completion);
                    const gifs = await getGifsBySearch(querybyAI);
                    if (gifs) {
                      setIsGeneratingGif(false);
                      setGifs(gifs);
                    }
                  }}
                >
                  {isGeneratingGif ? "Finding Gifs..." : "AI - Find a Gif"}
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-3">
                  {gifs.length > 0
                    ? gifs.map((gif) => {
                        return (
                          <button
                            key={gif.media_formats.gif.url}
                            onClick={() => setSelectedGif(gif)}
                            className="h-36 w-36 relative md:h-40 md:w-40 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center"
                          >
                            <Image
                              src={gif.media_formats.gif.url}
                              alt="gif"
                              unoptimized
                              fill
                              className="object-cover rounded-lg overflow-hidden "
                            />
                          </button>
                        );
                      })
                    : Array.from({ length: 6 }).map((_, i) => {
                        return (
                          <button
                            key={i}
                            className="h-36 w-36 relative md:h-40 md:w-40 rounded-lg border-2 border-dashed border-muted-foreground/25 flex items-center justify-center"
                          >
                            {isGeneratingGif ? "Finding Gifs..." : "No gif"}
                          </button>
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
              <CardContent className="pb-2 ">
                {/* <Textarea
                  placeholder="Your tweet content will appear here..."
                  value={tweet}
                  onChange={(e) => setTweet(e.target.value)}
                  className="h-auto resize-none border-none bg-none ring-offset-none focus-visible:ring-offset-0 outline-none focus-visible:ring-0 p-0 mt-4 mb-2 text-sm"
                /> */}

                <div
                  contentEditable="true"
                  className="mb-4 relative ring-offset-none focus-visible:ring-offset-0 outline-none focus-visible:ring-0"
                >
                  {tweet}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="absolute -top-3 -right-3">
                        <Info className="size-4 text-neutral-400 cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent className="text-sm top-3 right-3 text-neutral-400">
                        <p>You can edit this post here.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div
                  className={cn(
                    `relative flex items-center justify-center mb-2 aspect-square border border-dashed border-muted-foreground/25 rounded-lg`,
                    selectedGif && "border-none"
                  )}
                >
                  {selectedGif ? (
                    <Image
                      src={selectedGif.media_formats.gif.url}
                      alt="Selected gif"
                      unoptimized
                      fill
                      className="object-cover rounded-lg"
                    />
                  ) : (
                    <span className="text-muted-foreground">
                      No GIF selected
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 flex justify-end">
              <Button
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?text=${tweet}${selectedGif?.media_formats.gif.url}`,
                    "_blank"
                  )
                }
              >
                Post on X (Twitter)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
