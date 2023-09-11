const DATA_SOURCE_URL = "https://api.themoviedb.org/3/";
const TOP_RATED = "movie/top_rated?language=en-US&page=1";
const TRENDING = "trending/all/week?language=en-US";
const NOW_PLAYING = "movie/now_playing?language=en-US&page=1";
const DISCOVER =
  "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

async function GET(path: string) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_DATA_API_TOKEN as string,
    },
  };
  try {
    const response = await fetch(DATA_SOURCE_URL + path, options);
    const data = await response.json();
    return data.results.map((movie: any) => {
      return {
        id: movie.id,
        title: movie.title || movie.name,
        overview: movie.overview,
        release_date: movie.release_date || movie.first_air_date,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      };
    }) as Movie[];
  } catch (error) {
    console.error("ERROR:", error);
    return [];
  }
}

export async function GetTopRated() {
  return await GET(TOP_RATED);
}

export async function GetTrending() {
  return await GET(TRENDING);
}

export async function GetNowPlaying() {
  return await GET(NOW_PLAYING);
}

export async function GetDiscoverByGenre(genres: string[]) {
  const path = genres.length
    ? `${DISCOVER}&with_genres=${genres.join("|")}`
    : DISCOVER;
  return await GET(path);
}

export async function GetSearch(query: string) {
  const path = `search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  return await GET(path);
}
