import { GetSearch } from "@/app/api/movies/route";
import { Card } from "../card/card";
import styles from "./search.module.css";

type SearchProps = {
  searchTerm?: string;
};

export const Search = async ({ searchTerm }: SearchProps) => {
  if (!searchTerm) return null;
  const movies = await GetSearch(searchTerm);
  const renderCards = () => {
    return movies.map((movie) => {
      return <Card key={movie.id} movie={movie} />;
    });
  };
  return (
    <div className={styles.body}>
      <span className={styles.heading}>Search</span>
      <div className={styles.grid_container}>{renderCards()}</div>
    </div>
  );
};
