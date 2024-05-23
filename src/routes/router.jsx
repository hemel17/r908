import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks />,
      },
    ],
  },
]);

export default router;
