const getReadBook = () => {
  const storedReadBook = localStorage.getItem("read-books");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
  }
  return [];
};

const getWishlist = () => {
  const storedWishlist = localStorage.getItem("wishlist");
  if (storedWishlist) {
    return JSON.parse(storedWishlist);
  }
  return [];
};

const saveReadBook = (id) => {
  const storedReadBooks = getReadBook();
  const exists = storedReadBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedReadBooks.push(id);
    localStorage.setItem("read-books", JSON.stringify(storedReadBooks));
  }
};

const saveWishlist = (id) => {
  const storedWishlistBooks = getWishlist();
  const exists = storedWishlistBooks.find((bookId) => bookId === id);
  if (!exists) {
    storedWishlistBooks.push(id);
    localStorage.setItem("wishlist", JSON.stringify(storedWishlistBooks));
  }
};

export { getReadBook, saveReadBook, getWishlist, saveWishlist };
