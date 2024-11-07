import { Dashboard } from "@/components/dashboard";

async function page() {
  const url =
    "https://api.apileague.com/search-gifs?query=american%20psycho&number=6";

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "x-api-key": process.env.MEME_API_KEY || "",
    },
  });

  const data = await response.json();

  const gifs = data.images;

  return <Dashboard gifs={gifs} />;
}

export default page;
