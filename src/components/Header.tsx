import { Link, useMatch } from "react-router-dom";
import Logo from "../assets/Logo";
import { CiSearch } from "react-icons/ci";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

const headerVariants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
};
export default function Header() {
  const [searchOpen, setsearchOpen] = useState(false);
  const homeMatch = useMatch("");
  const tvMatch = useMatch("tv");
  //   console.log(homeMatch, tvMatch);
  const headerAnimation = useAnimation();
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > 0.1) {
      headerAnimation.start("scroll");
    } else {
      headerAnimation.start("top");
    }
  });
  return (
    <motion.header
      variants={headerVariants}
      initial="top"
      animate={headerAnimation}
      className="  text-white sm:px-3 md:px-10 flex items-center justify-between fixed w-full bg-opacity-1"
    >
      <div className="flex items-center sm:gap-x-2 md:gap-x-5">
        <Logo />
        <Link className="relative" to={""}>
          Home
          {homeMatch && (
            <motion.div
              layoutId="circle"
              className="indicator-circle"
            ></motion.div>
          )}
        </Link>
        <Link className="relative" to={"tv"}>
          Tv Shows
          {tvMatch && (
            <motion.div
              layoutId="circle"
              className="indicator-circle"
            ></motion.div>
          )}
        </Link>
      </div>

      <div className="sm:hidden md:flex flex-row items-center gap-x-2">
        <motion.input
          animate={{ scaleX: searchOpen ? 1 : 0 }}
          className=" px-2 origin-top-right text-black"
          type="text"
          placeholder="검색"
        />
        <CiSearch
          tabIndex={0}
          className="text-2xl cursor-pointer"
          onClick={() => setsearchOpen((prev) => !prev)}
        />
      </div>

      <div className="sm:block md:hidden dropdown dropdown-end">
        <CiSearch tabIndex={0} className="text-2xl" />
        <div
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-7"
        >
          <input
            type="text"
            placeholder="검색"
            className="px-2 text-black outline-none"
          />
        </div>
      </div>
    </motion.header>
  );
}
