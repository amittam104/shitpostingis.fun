"use client";

import React, { ReactElement } from "react";
import {
  ArrowRight,
  Twitter,
  Sparkles,
  Send,
  Repeat,
  Menu,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { Button } from "./ui/button";

export default function LandingPage({ credits }: { credits: number }) {
  const { toast } = useToast();

  const thisYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Twitter className="w-5 h-5 text-lime-600 mr-2" />
            <span className="text-sm font-semibold">ShitpostingIsFun</span>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/dashboard">
              <Button
                onClick={() => {
                  if (credits > 0) return;

                  toast({
                    variant: "destructive",
                    title: "You have 0 credits left",
                    description:
                      "You have exhausted the credits limit of the app.",
                  });
                }}
                className="bg-lime-700 text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-lime-700 transition duration-300"
              >
                Start Shitposting
                <ArrowRight className="w-3 h-3 inline-block ml-1" />
              </Button>
            </Link>
          </nav>
          <button className="md:hidden">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gray-50 py-72 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='2' cy='2' r='2'/%3E%3Ccircle cx='30' cy='2' r='2'/%3E%3Ccircle cx='58' cy='2' r='2'/%3E%3Ccircle cx='2' cy='30' r='2'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='58' cy='30' r='2'/%3E%3Ccircle cx='2' cy='58' r='2'/%3E%3Ccircle cx='30' cy='58' r='2'/%3E%3Ccircle cx='58' cy='58' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Unleash Your Inner Shitposter
          </h1>
          <p className="text-sm mb-6">
            Use AI to craft the perfect shitposts for X/Twitter and watch the
            chaos unfold!
          </p>
          <Link href="/dashboard">
            <Button
              onClick={() => {
                if (credits > 0) return;

                toast({
                  variant: "destructive",
                  title: "You have 0 credits left",
                  description:
                    "You have exhausted the credits limit of the app.",
                });
              }}
              className="bg-lime-700 text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-lime-700 transition duration-300"
            >
              Start Shitposting
              <ArrowRight className="w-3 h-3 inline-block ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-semibold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles className="w-4 h-4 text-lime-600" />}
              title="AI-Powered Creativity"
              description="Generate hilarious shitposts with cutting-edge AI technology."
            />
            <FeatureCard
              icon={<Send className="w-4 h-4 text-lime-600" />}
              title="One-Click Posting"
              description="Share your masterpieces on X/Twitter with a single tap."
            />
            <FeatureCard
              icon={<Repeat className="w-4 h-4 text-lime-600" />}
              title="Endless Inspiration"
              description="Never run out of ideas while writing posts."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-32">
        <div className="container flex flex-col items-center mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-12">
            How It Works
          </h2>
          <div className="flex flex-col items-start max-w-xs mx-auto space-y-8">
            <Step
              number={1}
              description="Choose a topic or use a random prompt"
            />
            <Step number={2} description="Let AI generate your shitpost" />
            <Step
              number={3}
              description="Review, edit, and post to X/Twitter"
            />
            <Step number={4} description="Watch the reactions roll in" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl font-semibold mb-4">
            Ready to Become a Shitposting Legend?
          </h2>
          <p className="text-sm mb-6">
            Join thousands of users who are already causing mayhem on X/Twitter!
          </p>
          <Link href="/dashboard">
            <Button
              onClick={() => {
                if (credits > 0) return;

                toast({
                  variant: "destructive",
                  title: "You have 0 credits left",
                  description:
                    "You have exhausted the credits limit of the app.",
                });
              }}
              className="bg-lime-700 text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-lime-700 transition duration-300"
            >
              Start Shitposting
              <ArrowRight className="w-3 h-3 inline-block ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs mb-4 md:mb-0">
              &copy; {thisYear} ShitpostingIsFun. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-xs hover:text-lime-400">
                Privacy Policy
              </a>
              <a href="#" className="text-xs hover:text-lime-400">
                Terms of Service
              </a>
              {/* <a href="#" className="text-xs hover:text-lime-400">
                Contact Us
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactElement;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-sm font-semibold ml-2">{title}</h3>
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
}

function Step({
  number,
  description,
}: {
  number: number;
  description: string;
}) {
  return (
    <div className="flex items-center">
      <div className="bg-lime-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">
        {number}
      </div>
      <p className="text-xs">{description}</p>
    </div>
  );
}
