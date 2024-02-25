import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./page/Home";
import Tv from "./page/Tv";
import Search from "./page/Search";
import NotFound from "./page/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "movies/:id",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "tvs/:id",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
