const getReadBook = () => {
  const storedReadBook = localStorage.getItem("read-books");
  if (storedReadBook) {
    return JSON.parse(storedReadBook);
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

export { getReadBook, saveReadBook };
