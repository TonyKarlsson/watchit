import { GetTrending } from "@/app/api/movies/route";
import { Card } from "../card/card";
import Link from "next/link";
import styles from "./trending.module.css";

type TrendingProps = {
  showAll?: boolean;
};

export const Trending = async ({ showAll = false }: TrendingProps) => {
  const movies = await GetTrending();

  const renderCards = () => {
    return showAll
      ? movies.map((movie) => {
          return <Card key={movie.id} movie={movie} size="lg" />;
        })
      : movies.slice(0, 2).map((movie) => {
          return <Card key={movie.id} movie={movie} size="lg" />;
        });
  };

  return (
    <div className={styles.body}>
      <span className={styles.heading}>Trending</span>
      {!showAll && (
        <Link href="/trending">
          <span className={styles.show_all}>Show more{" >>"}</span>
        </Link>
      )}
      <div className={styles.grid_container}>{renderCards()}</div>
    </div>
  );
};
