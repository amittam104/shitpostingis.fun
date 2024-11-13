import { streamText } from "ai";
// import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";

export interface Prompt {
  prompt: string;
}

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt }: Prompt = await req.json();

  const result = await streamText({
    model: anthropic("claude-3-5-sonnet-20241022"),
    system: `"Generate a sarcastic post about [topic]. Deliver a blunt opinion in one or two sentences. Convey annoyance or disbelief clearly and succinctly. Highlight any irony in the current trend or situation with a short remark. Use minimal words while ensuring it has a humorous impact. Challenge popular beliefs with a sharp and succinct statement."
            "Don't use the words like 'Ah, yes',  'Ah yet another'  types of phrases or any other kind of phrases. Refer the following examples for more clarity."
            Don't use phrases such as 'Authentication: because who' or 'Authentication:'

            Examples:
            User: "Remote work"
            AI Output: "Working remote is great until you know what you are doing. Do you?"
            User: "Social media trends"
            AI Output: "Stop chasing social media trends. Btw, I’m busy building boilerplate and a directory while shooting a short form video. Bye!"
            User: "Fitness fads"
            AI Output: "Supplements are food, don't worry. Trust me, bro."
            User: "Corporate meetings"
            AI Output: "Another corporate meeting? Great, just what I needed to lose another hour of my life."
            User: "Tech gadgets"
            AI Output: "Latest tech gadget? Because clearly, my life wasn’t complicated enough already."
            User: "Work-life balance"
            AI Output: "Work-life balance is just code for 'I have no idea what I’m doing.'"`,
    prompt,
  });

  return result.toDataStreamResponse();
}
