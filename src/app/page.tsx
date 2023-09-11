import { NowPlaying } from "../components/nowPlaying/NowPlaying";
import { Trending } from "../components/trending/Trending";
import { TopRated } from "../components/topRated/TopRated";
import { Search } from "../components/search/Search";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Search />
      <Trending />
      <NowPlaying />
      <TopRated />
      <Footer />
    </>
  );
}
