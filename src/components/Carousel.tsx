import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { IMovie, getImg } from "../api";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Carousel({
  data,
  title,
}: {
  title: string;
  data: IMovie[];
}) {
  const silderRef = useRef<Slider>(null);
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
  return (
    <div className="relative top-[-100px]">
      <h1 className="px-1 mb-2 text-3xl">{title}</h1>
      <div className="relative mb-5 slider-container ">
        <Slider ref={silderRef} {...settings}>
          {data.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Slider>
        <button
          className="absolute hover:bg-[rgba(0,0,0,0.5)] p-1 -translate-y-1/2 bg-black border-2 rounded-full left-2 top-1/2"
          onClick={() => silderRef?.current?.slickPrev()}
        >
          <FaArrowLeft className="text-2xl" />
        </button>
        <button
          className="absolute hover:bg-[rgba(0,0,0,0.5)] p-1 -translate-y-1/2 bg-black border-2 rounded-full right-2 top-1/2"
          onClick={() => silderRef?.current?.slickNext()}
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

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
const CarouselItem = (props: IMovie) => {
  const bg_url = getImg(props.poster_path || props.backdrop_path);
  return (
    <motion.img
      src={bg_url}
      className="z-50 p-2 cursor-pointer h-60 w-60 "
      alt="poster img"
      variants={CarouselItemVariants}
      whileHover={"hover"}
      initial="normal"
    />
  );
};
