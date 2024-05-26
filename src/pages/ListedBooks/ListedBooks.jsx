import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBook, getWishlist } from "../../utility/localstorage";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Option,
  Select,
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

  const handleRating = () => {
    const ratedRead = [...readBooks].sort((a, b) => b.rating - a.rating);
    const ratedWish = [...wishlist].sort((a, b) => b.rating - a.rating);
    console.log(ratedRead, ratedWish);
    setReadBooks(ratedRead);
    setWishlist(ratedWish);
  };
  const handlePages = () => {
    const paginatedRead = [...readBooks].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    const paginatedWish = [...wishlist].sort(
      (a, b) => b.totalPages - a.totalPages
    );
    setReadBooks(paginatedRead);
    setWishlist(paginatedWish);
  };

  const handleYear = () => {
    const yearRead = [...readBooks].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    const yearWish = [...wishlist].sort(
      (a, b) => b.yearOfPublishing - a.yearOfPublishing
    );
    setReadBooks(yearRead);
    setWishlist(yearWish);
  };

  const handleSortChange = (e) => {
    if (e === "rating") {
      handleRating();
    }
    if (e === "pages") {
      handlePages();
    }
    if (e === "year") {
      handleYear();
    }
  };

  return (
    <section className="my-6">
      <Typography variant="h2" className="text-center text-white">
        Books For Your Soul
      </Typography>
      <div className="p-4 mx-auto my-4 bg-white rounded-lg w-72">
        <Select label="Sort By" onChange={(e) => handleSortChange(e)}>
          <Option value="rating">Rating</Option>
          <Option value="pages">Number of pages</Option>
          <Option value="year">Published year</Option>
        </Select>
      </div>
      <Tabs className="my-6" value="read">
        <TabsHeader className="mx-auto max-w-96">
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
