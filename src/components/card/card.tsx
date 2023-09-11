import Image from "next/image";

import styles from "./card.module.css";

type CardProps = {
  movie: Movie;
  size?: "sm" | "lg";
};

export const Card = ({ movie, size = "sm" }: CardProps) => {
  if (!movie.backdrop_path && !movie.poster_path) return null;
  const releaseYear =
    movie.release_date === undefined
      ? "N/A"
      : movie.release_date?.split("-")[0];
  const imageSize = size === "lg" ? "w1280" : "w500";
  return (
    <div className={styles.grid_item}>
      <div className={styles.card_body}>
        <Image
          src={`https://image.tmdb.org/t/p/${imageSize}${
            size === "lg" ? movie.backdrop_path : movie.poster_path
          }`}
          width={size === "lg" ? 2000 : 600}
          height={200}
          alt="Movie poster"
        />
        <div
          className={size === "sm" ? styles.card_info_sm : styles.card_info_lg}
        >
          <div
            className={
              size === "sm" ? styles.card_header_sm : styles.card_header_lg
            }
          >
            {movie.title}
          </div>
          <div className={styles.card_year}>{releaseYear}</div>
          {size === "lg" && (
            <div className={styles.overview}>{movie.overview}</div>
          )}
        </div>
      </div>
    </div>
  );
};
