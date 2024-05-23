import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import Root from "./layout/Root.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
