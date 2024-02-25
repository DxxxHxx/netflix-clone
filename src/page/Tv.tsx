import { useQuery } from "@tanstack/react-query";
import {  ITv, getAiringTv } from "../api";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Loader from "./Loader";
export default function Tv() {
  const { data: getAiring, isLoading: getAiringLoading } = useQuery<ITv[]>(
    {
      queryKey: ["tv", "getAiring"],
      queryFn: getAiringTv,
    }
  );
  // const { data: topRated, isLoading: topRatedLoading } = useQuery<IMovie[]>({
  //   queryKey: ["movies", "topRated"],
  //   queryFn: getTopRatedMovies,
  // });

  // const isLoading = nowPlayingLoading || topRatedLoading;
  if (getAiringLoading) return <Loader />;
  return (
    <div>
      <Banner data={getAiring![0]} />
      <Carousel data={getAiring!} title="Now Playing" />
      {/* <Carousel data={topRated!} title="Top Rated" /> */}
    </div>
  );
}
