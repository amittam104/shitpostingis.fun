"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Shitpostingisfun</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button size="sm">Start Shitposting</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="h-dvh flex items-center text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4">
            Elevate Your Shitposting Game
          </h2>
          <p className="text-base text-muted-foreground mb-8">
            Unleash your creativity with AI-powered shit posts generation
          </p>
          <Link href="/dashboard">
            <Button size="sm">Start Shitposting</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      {/* <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Sparkles className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>AI-Powered Memes</CardTitle>
              </CardHeader>
              <CardContent>
                Generate hilarious memes with cutting-edge AI technology
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                Create and share memes in seconds, not minutes
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Target className="h-6 w-6 mb-2 text-primary" />
                <CardTitle>Targeted Humor</CardTitle>
              </CardHeader>
              <CardContent>
                Tailor your memes to specific audiences and trends
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Benefits */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary rounded-full">
                <Rocket className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Boost Your Social Media Presence
                </h3>
                <p className="text-muted-foreground">
                  Stand out from the crowd with unique, AI-generated content
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-primary rounded-full">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Save Time and Effort
                </h3>
                <p className="text-muted-foreground">
                  Focus on engagement while our AI handles the creative heavy
                  lifting
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How it Works */}
      {/* <section id="how-it-works" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
          <div className="max-w-3xl mx-auto">
            {[
              "Sign up for an account",
              "Input your desired meme topic or theme",
              "Let our AI generate hilarious meme options",
              "Choose your favorite and customize if needed",
              "Share directly to your social media platforms",
            ].map((step, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="flex flex-col items-center mr-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full font-bold">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="w-px h-full bg-border mt-2"></div>
                  )}
                </div>
                <div className="pt-1">
                  <p className="text-lg">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      {/* <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-2xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it really AI-powered?</AccordionTrigger>
              <AccordionContent>
                Yes, our meme generation uses state-of-the-art AI models to
                create unique and hilarious content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How many memes can I generate?
              </AccordionTrigger>
              <AccordionContent>
                Your account comes with a set number of credits. Each meme
                generation uses one credit. You can always purchase more credits
                as needed.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I edit the generated memes?
              </AccordionTrigger>
              <AccordionContent>
                While our AI creates great memes, you have the option to
                customize and tweak them to your liking before sharing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">Shitpostingisfun</h2>
              <p className="text-sm text-muted-foreground">
                Elevate your shitposting game with AI
              </p>
            </div>
            <nav className="flex space-x-4">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shitpostingisfun. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
