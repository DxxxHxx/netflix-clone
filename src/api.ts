export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getNowPlayingMovies = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjNhMWZjNzhjNDgwOTZhNTlkOGFhYTlmZjJkODBkMCIsInN1YiI6IjY0YmY0NWY2OGVlNDljMDBmZTBlZjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdJgHYf243OSqlg1bGDmXQbFE8nVEHcTqzhV-R_tqxs",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`,
    options
  )
    .then((res) => res.json())
    .then((json) => json.results)
    .catch((e) => console.error(e));
};

export const getTopRatedMovies = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjNhMWZjNzhjNDgwOTZhNTlkOGFhYTlmZjJkODBkMCIsInN1YiI6IjY0YmY0NWY2OGVlNDljMDBmZTBlZjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdJgHYf243OSqlg1bGDmXQbFE8nVEHcTqzhV-R_tqxs",
    },
  };

  return fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => response.results)
    .catch((err) => console.error(err));
};
export const getImg = (path: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}${path}`;
};
