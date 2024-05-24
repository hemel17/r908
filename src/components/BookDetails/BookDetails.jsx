import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const data = useLoaderData();
  const { id } = useParams;
  console.log(data, id);
  return <div>BookDetails</div>;
};
export default BookDetails;
