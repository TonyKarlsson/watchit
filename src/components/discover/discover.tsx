"use client";
import { GET as GET_GENRES } from "@/app/api/genres/route";
import { useCallback, useEffect, useRef, useState } from "react";
import { GenreButton } from "../genreButton/GenreButton";
import { Card } from "../card/card";
import { GetDiscoverByGenre } from "@/app/api/movies/route";
import styles from "./discover.module.css";

export const Discover = () => {
  const [selectedGenres, setSetselectedGenres] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const onClick = useCallback(
    (genre: string) => {
      if (selectedGenres.includes(genre)) {
        setSetselectedGenres(selectedGenres.filter((g) => g !== genre));
      } else {
        setSetselectedGenres([...selectedGenres, genre]);
      }
    },
    [selectedGenres]
  );

  const genres = useRef<Genre[]>([]);
  useEffect(() => {
    GET_GENRES().then((res) => {
      genres.current = res;
      setLoading(false);
    });
  }, []);

  const discover = useRef<Movie[]>([]);
  useEffect(() => {
    setLoading(true);
    GetDiscoverByGenre(selectedGenres).then((res) => {
      discover.current = res;
      setLoading(false);
    });
  }, [selectedGenres]);

  const renderGenres = useCallback(() => {
    return genres.current.map((genre) => {
      const isActive = selectedGenres.includes(String(genre.id));
      return (
        <GenreButton
          key={genre.id}
          genre={genre}
          onClick={onClick}
          isActive={isActive}
        />
      );
    });
  }, [onClick, selectedGenres]);

  const renderCards = () => {
    if (loading) return null;
    return discover.current.map((movie) => {
      return <Card key={movie.id} movie={movie} />;
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.heading}>Discover</div>
      <div className={styles.buttons_grid_container}>{renderGenres()}</div>
      <div className={styles.grid_container}>{renderCards()}</div>
    </div>
  );
};
