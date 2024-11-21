import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

function page() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-8">
        Shitpostingisfun: Privacy Policy
      </h1>

      <Card className="mb-6 p-6">
        <CardContent>
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">
              2.1 Information Collection
            </h2>
            <p>
              We collect the following personal information:
              <ul className="list-disc pl-5">
                <li>Name</li>
                <li>Email Address</li>
                <li>Profile Image</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold">2.2 Data Storage</h2>
            <p>
              User data is securely stored using Supabase, a trusted database
              platform. We implement standard security measures to protect your
              information.
            </p>

            <h2 className="text-xl font-semibold">2.3 Data Usage</h2>
            <p>
              Your data is used solely for:
              <ul className="list-disc pl-5">
                <li>User account management</li>
                <li>Tracking post generation credits</li>
                <li>Providing the Shitpostingisfun service</li>
              </ul>
            </p>

            <h2 className="text-xl font-semibold">2.4 Third-Party Sharing</h2>
            <p>
              We do not share your personal information with any third parties.
              Your data remains confidential within our service.
            </p>

            <h2 className="text-xl font-semibold">2.5 User Rights</h2>
            <ul className="list-disc pl-5">
              <li>
                You can request deletion of your account and associated data
              </li>
              <li>You can review the personal information we store</li>
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

export default page;
