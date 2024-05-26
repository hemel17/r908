import Books from "../../components/Books/Books";

const SuggestedBooks = () => {
  const bookTitle = "Suggested For You";
  return (
    <section className="my-6">
      <Books bookTitle={bookTitle} />
    </section>
  );
};
export default SuggestedBooks;
