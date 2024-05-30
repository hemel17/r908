import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getReadBook } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PagesToRead = () => {
  const books = useLoaderData();
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const readBooksList = getReadBook();
    if (books) {
      const filterReadBooks = books.filter((book) =>
        readBooksList.includes(book.bookId)
      );
      setReadBooks(filterReadBooks);
    }
  }, [books]);

  const data = readBooks.map((book) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: 2400,
    amt: 2400,
  }));
  return (
    <section className="w-full max-h-screen rounded-lg bg-blue-gray-600">
      <ResponsiveContainer
        width={"100%"}
        height={496}
        className="mx-auto my-10"
      >
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="p-5"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: "white", fontSize: 24, fontWeight: "semiBold" }}
          />
          <YAxis tick={{ fill: "white" }} />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default PagesToRead;
