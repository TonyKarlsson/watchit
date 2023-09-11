import { Card } from "../card/card";
import Link from "next/link";
import { GetNowPlaying } from "@/app/api/movies/route";
import styles from "./nowplaying.module.css";

type NowPlayingProps = {
  showAll?: boolean;
};

export const NowPlaying = async ({ showAll = false }: NowPlayingProps) => {
  const movies = await GetNowPlaying();

  const renderCards = () => {
    //TODO: Fix side scrolling to get more trending movies?
    return showAll
      ? movies.map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        })
      : movies.slice(0, 5).map((movie) => {
          return <Card key={movie.id} movie={movie} />;
        });
  };

  return (
    <div className={styles.body}>
      <span className={styles.heading}>Now Playing</span>
      {!showAll && (
        <Link href="/now-playing">
          <span className={styles.show_all}>Show more{" >>"}</span>
        </Link>
      )}
      <div className={styles.grid_container}>{renderCards()}</div>
    </div>
  );
};
