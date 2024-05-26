import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBook, getWishlist } from "../../utility/localstorage";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";

const ListedBooks = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const data = [
    {
      label: "Read Books",
      value: "read",
      desc: readBooks,
    },
    {
      label: "Wishlist Books",
      value: "wishlist",
      desc: wishlist,
    },
  ];
  useEffect(() => {
    const readBooksList = getReadBook();
    const wishlistBooks = getWishlist();
    if (books) {
      const filterReadBooks = books.filter((book) =>
        readBooksList.includes(book.bookId)
      );
      const filteredWishlist = books.filter((book) =>
        wishlistBooks.includes(book.bookId)
      );
      setReadBooks(filterReadBooks);
      setWishlist(filteredWishlist);
    }
  }, [books]);

  return (
    <section className="my-6">
      <Typography variant="h2" className="text-center text-white">
        Books For Your Soul
      </Typography>
      <Tabs className="my-6" value="read">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel className="space-y-4" key={value} value={value}>
              {desc.map((book) => {
                const {
                  bookId,
                  image,
                  bookName,
                  author,
                  tags,
                  yearOfPublishing,
                  publisher,
                  totalPages,
                  category,
                  rating,
                } = book;
                return (
                  <div key={bookId}>
                    <Card className="w-full max-w-[90%] shadow-lg md:flex-row mx-auto">
                      <CardHeader
                        floated={false}
                        color="blue-gray"
                        className="md:mb-4"
                      >
                        <figure className="max-w-96 max-h-96 md:max-h-52">
                          <img className="w-full" src={image} alt={bookName} />
                        </figure>
                      </CardHeader>
                      <CardBody>
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="font-semibold"
                        >
                          {book.bookName}
                        </Typography>
                        <Typography color="blue-gray">
                          By : <span>{author}</span>
                        </Typography>

                        <div className="flex flex-wrap gap-2">
                          <span>Tag : </span>
                          {tags.map((tag, idx) => {
                            return (
                              <Chip
                                key={idx}
                                variant="outlined"
                                value={"#" + tag}
                                color="light-green"
                              />
                            );
                          })}
                        </div>

                        <div className="flex flex-col flex-wrap gap-2 md:gap-6 md:flex-row">
                          <Typography>
                            Year of publishing : {yearOfPublishing}
                          </Typography>
                          <Typography>Publisher : {publisher}</Typography>
                          <Typography>Total Pages : {totalPages}</Typography>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <Chip
                            color="blue-gray"
                            value={"Category : " + category}
                          />
                          <Chip
                            color="deep-purple"
                            value={"Rating : " + rating}
                          />
                          <Link to={`/books/${bookId}`}>
                            <Chip color="teal" value="View Details" />
                          </Link>
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                );
              })}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </section>
  );
};
export default ListedBooks;
