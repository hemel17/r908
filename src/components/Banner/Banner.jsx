import { Button, Typography } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col-reverse gap-6 p-10 my-5 rounded-lg bg-blue-gray-500 md:px-20 md:flex-row">
      <div className="flex items-center justify-start flex-1">
        <div>
          <Typography variant="h1" className="text-3xl md:text-5xl">
            Books to freshen up your bookshelf
          </Typography>
          <Button
            color="green"
            className="my-6"
            onClick={() => navigate("/listedBooks")}
          >
            View The List
          </Button>
        </div>
      </div>
      <figure className="flex-1 mx-auto max-w-72">
        <img
          src="https://i.ibb.co/TbhwgQ4/image.png"
          alt="The great gasby"
          className="w-full"
        />
      </figure>
    </section>
  );
};
export default Banner;
