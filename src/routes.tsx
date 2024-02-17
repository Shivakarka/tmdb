import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MovieDetailsPage from "./pages/MovieDetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path:"/movie/:id", element:<MovieDetailsPage/> }
    ]
  },
]);

export default router;
