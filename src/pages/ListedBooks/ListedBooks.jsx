import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getReadBook, getWishlist } from "../../utility/localstorage";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
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
            {desc.map((book) => (
              <div key={book.bookId}>
                <Card className="w-full max-w-[90%] shadow-lg md:flex-row mx-auto">
                  <CardHeader
                    floated={false}
                    color="blue-gray"
                    className="md:mb-4"
                  >
                    <figure className="max-w-96 max-h-96 md:max-h-52">
                      <img
                        className="w-full"
                        src={book.image}
                        alt={book.bookName}
                      />
                    </figure>
                  </CardHeader>
                  <CardBody>
                    <div className="flex items-center justify-between mb-3">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="font-medium"
                      >
                        Wooden House, Florida
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="flex items-center gap-1.5 font-normal"
                      >
                        5.0
                      </Typography>
                    </div>
                    <Typography color="gray">
                      Enter a freshly updated and thoughtfully furnished
                      peaceful home surrounded by ancient trees, stone walls,
                      and open meadows.
                    </Typography>
                  </CardBody>
                  <CardFooter className="pt-3">
                    <Button size="lg" fullWidth={true}>
                      Reserve
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};
export default ListedBooks;
