// import { LandingPageComponent } from "@/components/landing-page";
import LandingPage from "@/components/LandingPage";
import { getUser } from "@/lib/services";

export default async function Home() {
  const [user] = await getUser();

  return <LandingPage credits={user?.credits} />;
}
