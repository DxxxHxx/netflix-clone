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
export interface IMovieInfo {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export const getNowPlayingMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjNhMWZjNzhjNDgwOTZhNTlkOGFhYTlmZjJkODBkMCIsInN1YiI6IjY0YmY0NWY2OGVlNDljMDBmZTBlZjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdJgHYf243OSqlg1bGDmXQbFE8nVEHcTqzhV-R_tqxs",
    },
  };

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=1`,
      options
    );
    const json = await res.json();
    return json.results;
  } catch (e) {
    return console.error(e);
  }
};

export const getTopRatedMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjNhMWZjNzhjNDgwOTZhNTlkOGFhYTlmZjJkODBkMCIsInN1YiI6IjY0YmY0NWY2OGVlNDljMDBmZTBlZjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdJgHYf243OSqlg1bGDmXQbFE8nVEHcTqzhV-R_tqxs",
    },
  };

  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1",
      options
    );
    const response_1 = await response.json();
    return response_1.results;
  } catch (err) {
    return console.error(err);
  }
};

export const getMovieInfo = async (id: number) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjNhMWZjNzhjNDgwOTZhNTlkOGFhYTlmZjJkODBkMCIsInN1YiI6IjY0YmY0NWY2OGVlNDljMDBmZTBlZjMzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdJgHYf243OSqlg1bGDmXQbFE8nVEHcTqzhV-R_tqxs",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=ko`,
      options
    );
    const response_1 = await response.json();
    return response_1;
  } catch (err) {
    return console.error(err);
  }
};

export const getImg = (path: string, format?: string) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}${path}`;
};
