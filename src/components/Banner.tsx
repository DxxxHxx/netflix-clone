import { IMovie, getImg } from "../api";

export default function Banner({ data }: { data: IMovie }) {
  //   console.log(data);
  const bg_url = getImg(data.backdrop_path || data.poster_path);
  return (
    <div className="h-screen ">
      <figure className="h-full ">
        <img src={bg_url} className="w-full h-full" alt="banner img" />
        <figcaption className="absolute -translate-y-1/2 top-1/2 left-5 sm:w-4/5 md:w-1/2">
          <h1 className="mb-5 text-3xl">{data.title}</h1>{" "}
          <p className="sm:text-sm md:text-lg">{data.overview || "overview"}</p>{" "}
        </figcaption>
      </figure>
    </div>
  );
}

// <section
//   className={`h-screen border-2 bg-[url('${bg_url}')] bg-center bg-cover flex flex-col justify-center px-7`}
// >
//   <div className="sm:w-4/5 md:w-1/2">
//     <h1 className="mb-5 text-3xl">{data.title}</h1>
//     <p className="sm:text-sm md:text-lg">{data.overview || "overview"}</p>
//   </div>
// </section>
