import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import ListedBooks from "../pages/ListedBooks/ListedBooks";
import PagesToRead from "../pages/PagesToRead/PagesToRead";
import LatestBooks from "../pages/LatestBooks/LatestBooks";
import SuggestedBooks from "../pages/SuggestedBooks/SuggestedBooks";
import BookDetails from "../components/BookDetails/BookDetails";

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
      {
        path: "/pagesToRead",
        element: <PagesToRead />,
      },
      {
        path: "/latestBooks",
        element: <LatestBooks />,
      },
      {
        path: "/suggestedBooks",
        element: <SuggestedBooks />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetails />,
        loader: ({ params }) => fetch("./books.json"),
      },
    ],
  },
]);

export default router;
