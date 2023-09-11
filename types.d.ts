type Movie = {
  id: number;
  title: string;
  overview?: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
};

type Genre = {
  id: number;
  name: string;
};

type Icon = {
  size: number;
  color: string;
};
