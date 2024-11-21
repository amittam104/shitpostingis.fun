import { LandingPageComponent } from "@/components/landing-page";
import { getUser } from "@/lib/services";

export default async function Home() {
  const [user] = await getUser();

  return <LandingPageComponent credits={user?.credits} />;
}
