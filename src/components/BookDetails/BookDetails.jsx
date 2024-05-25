import { Button, Chip, Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

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
    <section className="flex flex-col gap-8 my-8 md:flex-row">
      <div className="flex items-center justify-center flex-1">
        <figure className="max-w-[90%]">
          <img
            src={image}
            alt={bookName}
            className="mx-auto max-w-96 max-h-96"
          />
        </figure>
      </div>
      <div className="flex-1 space-y-8">
        <Typography variant="h3">{bookName}</Typography>
        <Typography>By : {author}</Typography>
        <Typography className="py-4 border-y-2">{category}</Typography>
        <Typography>
          <span>Review : </span>
          {review}
        </Typography>
        <div className="flex gap-2">
          <span>Tag : </span>
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
        <div className="pt-4 space-y-2 border-t-2 [&_span]:font-semibold">
          <Typography>
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
        <div className="space-x-4">
          <Button
            color="green"
            onClick={() =>
              toast.success("🦄 Wow so easy!", {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
                transition: Bounce,
              })
            }
          >
            Read
          </Button>
          <Button color="blue-gray">Wishlist</Button>
        </div>
      </div>
    </section>
  );
};
export default BookDetails;
