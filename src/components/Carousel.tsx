import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IMovie, IMovieInfo, getImg, getMovieInfo } from "../api";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { Link, PathMatch, useMatch, useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import StarRate from "./StarRate";

const CarouselItemVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
    y: -30,
    transition: {
      delay: 0.3,
    },
  },
};

export default function Carousel({
  data,
  title,
}: {
  title: string;
  data: IMovie[];
}) {
  const silderRef = useRef<Slider>(null);
  const navigate = useNavigate();

  const handleItemClick = (id: number) => {
    navigate(`/movies/${id}`);
  };
  const settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 319,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  const movieDetailMatch = useMatch("/movies/:id");
  return (
    <div className="relative sm:top-[-150px] md:top-[-120px] lg:top-[-150px] xl:top-[-200px]">
      <h1 className="px-1 md:text-3xl sm:text-lg">{title}</h1>
      <div className="relative mb-5 slider-container">
        <Slider ref={silderRef} {...settings}>
          {data.map((item) => (
            <div
              key={item.id}
              className="border-none outline-none sm:p-2 md:p-5 lg:p-8 xl:p-8 2xl:p-14"
            >
              <motion.img
                layoutId={`${item.id}`}
                onClick={() => handleItemClick(item.id)}
                src={getImg(item.poster_path || item.backdrop_path)}
                className="m-auto rounded-md cursor-pointer"
                alt="poster img"
                variants={CarouselItemVariants}
                whileHover={"hover"}
                initial="normal"
              />
            </div>
          ))}
        </Slider>
        <button
          className="absolute hover:bg-[rgba(0,0,0,0.5)] p-1 -translate-y-1/2 bg-black border-2 rounded-full left-2 top-1/2"
          onClick={() => silderRef?.current?.slickPrev()}
        >
          <FaArrowLeft className="sm:text-base md:text-2xl" />
        </button>
        <button
          className="absolute hover:bg-[rgba(0,0,0,0.5)] p-1 -translate-y-1/2 bg-black border-2 rounded-full right-2 top-1/2"
          onClick={() => silderRef?.current?.slickNext()}
        >
          <FaArrowRight className="sm:text-base md:text-2xl" />
        </button>
      </div>
      <AnimatePresence>
        {movieDetailMatch && (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              onClick={() => navigate("/")}
              exit={{ opacity: 0 }}
              className="fixed opacity-0 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]"
            ></motion.div>
            <MovieInfo match={movieDetailMatch} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const MovieInfo = ({ match }: { match: PathMatch<"id"> }) => {
  const { data, isLoading, isError } = useQuery<IMovieInfo>({
    queryKey: ["movie", "info"],
    queryFn: () => getMovieInfo(Number(match.params.id)),
  });
  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>Error...</h1>;
  return (
    <motion.div
      layoutId={match?.params.id}
      className="fixed top-0 bottom-0 left-0 right-0 w-3/4 m-auto overflow-y-auto border-2 rounded-lg h-3/4 glass"
    >
      <Link to={"/"}>
        <IoCloseOutline className="absolute z-30 text-4xl right-2 top-2" />
      </Link>
      <div className="h-full rounded-lg hero">
        <div className="flex-col hero-content lg:flex-row">
          <img
            src={getImg(data?.poster_path as string, "w200")}
            className="max-w-sm rounded-lg shadow-2xl sm:mt-8"
          />
          <div>
            <h1 className="mb-3 font-bold md:text-5xl sm:text-lg">
              {data?.title}
            </h1>
            {data?.genres.map((genre) => (
              <span key={genre.id}>{genre.name},</span>
            ))}
            <p className="py-5">{data?.overview || ""}</p>
            <div className="flex items-center xl:flex-row sm:flex-col gap-x-3">
              <StarRate rate={data!.vote_average / 2} />
              <span>
                평점 : {data?.vote_average.toFixed(1)}/10 ({data?.vote_count}명
                리뷰)
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
