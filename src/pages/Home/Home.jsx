import Banner from "../../components/Banner/Banner";
import Books from "../../components/Books/Books";

const Home = () => {
  const bookTitle = "Books For You";
  return (
    <>
      <Banner />
      <Books bookTitle={bookTitle} />
    </>
  );
};
export default Home;
