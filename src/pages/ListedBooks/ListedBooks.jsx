import { useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();
  console.log(books);
  return <div>ListedBooks</div>;
};
export default ListedBooks;
