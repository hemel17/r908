import { Typography } from "@material-tailwind/react";
import BooksCard from "../BooksCard/BooksCard";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Books = ({ bookTitle }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <section>
      <Typography variant="h2" className="mb-5 text-center">
        {bookTitle}
      </Typography>
      <div className="grid grid-cols-1 gap-4 mb-5 md:grid-cols-3 md:gap-6">
        {books.map((book) => {
          return <BooksCard key={book.bookId} book={book} />;
        })}
      </div>
    </section>
  );
};
Books.propTypes = {
  bookTitle: PropTypes.string,
};
export default Books;
