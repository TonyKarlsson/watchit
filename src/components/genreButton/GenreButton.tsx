"use client";
import styles from "./genrebutton.module.css";

type GenreButtonProps = {
  genre: Genre;
  isActive?: boolean;
  onClick: (genre: string) => void;
};

export const GenreButton = ({
  genre,
  onClick,
  isActive = false,
}: GenreButtonProps) => {
  return (
    <button
      className={isActive ? styles.active_button : styles.inactive_button}
      onClick={() => onClick(String(genre.id))}
    >
      {genre.name}
    </button>
  );
};
