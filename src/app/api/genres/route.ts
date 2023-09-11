const DATA_SOURCE_URL =
  "https://api.themoviedb.org/3/genre/movie/list?language=en";

export async function GET() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.NEXT_PUBLIC_DATA_API_TOKEN as string,
    },
  };

  const response = await fetch(DATA_SOURCE_URL, options);
  const data = await response.json();

  return data.genres.map((genre: Genre) => {
    return {
      id: genre.id,
      name: genre.name,
    };
  }) as Genre[];
}
