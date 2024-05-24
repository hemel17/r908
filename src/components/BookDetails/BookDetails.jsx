import { Chip, Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const book = useLoaderData();
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <section className="flex flex-col md:flex-row">
      <figure>
        <img src={image} alt={bookName} />
      </figure>
      <div>
        <Typography variant="h3">{bookName}</Typography>
        <Typography>By : {author}</Typography>
        <Typography className="border-y-2">{category}</Typography>
        <Typography>
          <span>Review : </span>
          {review}
        </Typography>
        <div className="flex gap-2">
          <span>Tag</span>
          {tags.map((tag, idx) => {
            return (
              <Chip
                key={idx}
                variant="outlined"
                value={"#" + tag}
                color="amber"
              />
            );
          })}
        </div>
        <Typography className="border-t-2">
          Number of Pages : <span>{totalPages}</span>
        </Typography>
        <Typography>
          Publisher : <span>{publisher}</span>
        </Typography>
        <Typography>
          Year of Publishing : <span>{yearOfPublishing}</span>
        </Typography>
        <Typography>
          Rating : <span>{rating}</span>
        </Typography>
      </div>
    </section>
  );
};
export default BookDetails;
