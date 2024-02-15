import { useQuery } from "@tanstack/react-query";
import { IMovie, getNowPlayingMovies, getTopRatedMovies } from "../api";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Loader from "./Loader";

export default function Home() {
  const { data: nowPlaying, isLoading: nowPlayingLoading } = useQuery<IMovie[]>(
    {
      queryKey: ["movies", "nowPlaying"],
      queryFn: getNowPlayingMovies,
    }
  );
  const { data: topRated, isLoading: topRatedLoading } = useQuery<IMovie[]>({
    queryKey: ["movies", "topRated"],
    queryFn: getTopRatedMovies,
  });

  const isLoading = nowPlayingLoading || topRatedLoading;
  if (isLoading) return <Loader />;
  return (
    <div>
      <Banner data={nowPlaying![0]} />
      <Carousel data={nowPlaying!} title="Now Playing" />
      <Carousel data={topRated!} title="Top Rated" />
    </div>
  );
}
