import { GetTopRated } from "@/app/api/movies/route";
import { Card } from "../card/card";
import Link from "next/link";
import styles from "./toprated.module.css";

type TopRatedProps = {
  showAll?: boolean;
};

export const TopRated = async ({ showAll = false }: TopRatedProps) => {
  const movies = await GetTopRated();
  const renderCards = () => {
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
      <span className={styles.heading}>Top Rated</span>
      {!showAll && (
        <Link href="/top-rated">
          <span className={styles.show_all}>Show more{" >>"}</span>
        </Link>
      )}
      <div className={styles.grid_container}>{renderCards()}</div>
    </div>
  );
};
