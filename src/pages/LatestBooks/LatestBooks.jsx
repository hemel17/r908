import Books from "../../components/Books/Books";

const LatestBooks = () => {
  const bookTitle = "Latest Books";
  return (
    <section className="my-6">
      <Books bookTitle={bookTitle} />
    </section>
  );
};
export default LatestBooks;
