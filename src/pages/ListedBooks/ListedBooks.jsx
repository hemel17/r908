import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

const ListedBooks = () => {
  const books = useLoaderData();
  console.log(books);
  useEffect(() => {}, []);

  return <div>ListedBooks</div>;
};
export default ListedBooks;
