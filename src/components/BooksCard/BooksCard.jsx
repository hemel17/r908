import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const BooksCard = ({ book }) => {
  const { image, tags, bookName, author, category, rating, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <Card className="w-full max-w-[26rem] shadow-lg bg-blue-gray-500">
        <CardHeader floated={false}>
          <img
            src={image}
            alt={bookName}
            className="object-cover w-full max-h-60"
          />
        </CardHeader>
        <CardBody>
          <div className="flex gap-2">
            {tags.map((tag, idx) => {
              return <Chip key={idx} value={tag} color="green" />;
            })}
          </div>
          <Typography variant="h5" color="white" className="my-3 font-medium">
            {bookName}
          </Typography>
          <Typography variant="small" className="font-medium text-gray-200">
            By : {author}
          </Typography>
        </CardBody>
        <CardFooter className="flex justify-between pt-3">
          <Typography color="white">{category}</Typography>
          <Typography color="white" className="flex items-center gap-1">
            <span>{rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};
BooksCard.propTypes = {
  book: PropTypes.object,
};
export default BooksCard;
