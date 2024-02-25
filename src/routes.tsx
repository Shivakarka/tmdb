import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./pages/Layout";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/loader/LoadingSpinner";
import Home from "./pages/Home";

const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const TvDetailsPage = lazy(() => import("./pages/TvDetailsPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <MovieDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "/tv/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TvDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "/search/:mediaPlatform/:page",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <SearchPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
