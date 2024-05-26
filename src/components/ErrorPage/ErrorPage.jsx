import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-64 h-64 mb-8 text-red-500"
      >
        <rect width="512" height="512" fill="#EF4444" />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#fff"
          fontFamily="sans-serif"
          fontSize="200"
          fontWeight="bold"
        >
          404
        </text>
      </svg>
      <p className="mb-8 text-lg text-gray-700">
        Oops! The page you are looking for does not exist.
      </p>
      <Link to="/" className="text-lg text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
