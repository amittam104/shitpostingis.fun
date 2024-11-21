import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Shitpostingisfun: Terms of Service
      </h1>

      <Card className="mb-6 p-6">
        <CardContent>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">1.1 Acceptance of Terms</h2>
            <p>
              By accessing or using Shitpostingisfun, you agree to these Terms
              of Service. If you do not agree, please do not use our service.
            </p>

            <h2 className="text-xl font-semibold">1.2 Service Description</h2>
            <p>
              Shitpostingisfun is a web application that allows users to
              generate fun posts using AI technology. Each user receives 20 free
              credits, with each post generation consuming 1 credit.
            </p>

            <h2 className="text-xl font-semibold">1.3 User Account</h2>
            <ul className="list-disc pl-5">
              <li>
                Users must provide accurate information during account creation
              </li>
              <li>
                Users are responsible for maintaining the confidentiality of
                their account
              </li>
              <li>Users are limited to 20 total post generations</li>
            </ul>

            <h2 className="text-xl font-semibold">1.4 Content Generation</h2>
            <p>
              Posts are generated using AI technology. Users are responsible for
              reviewing and editing content before posting. Shitpostingisfun is
              not liable for the content generated.
            </p>

            <h2 className="text-xl font-semibold">1.5 Prohibited Activities</h2>
            <ul className="list-disc pl-5">
              <li>Creating offensive or harmful content</li>
              <li>Attempting to bypass credit limitations</li>
              <li>Sharing account credentials</li>
            </ul>
          </section>
        </CardContent>
      </Card>

      <div className="flex items-center gap-8">
        <div className="text-sm text-gray-500">
          Last Updated: {new Date().toLocaleDateString()}
        </div>
        <Link href="/">
          <button className="cursor-pointer hover:text-neutral-700 hover:underline text-sm text-neutral-500">
            Back to homepage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TermsOfService;
