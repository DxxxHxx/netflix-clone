import { BsEmojiFrown } from "react-icons/bs";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center sm:gap-x-5 md:gap-x-10">
        <BsEmojiFrown className="sm:text-5xl md:text-9xl" />
        <div className="flex flex-col justify-around">
          <h1 className="sm:text-2xl md:text-7xl">404 ERROR</h1>
          <p className="sm:text-base md:text-3xl">페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
    </div>
  );
}
