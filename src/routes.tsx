import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Layout from "./pages/Layout.tsx";
import { Suspense, lazy } from "react";
import LoadingSpinner from "./components/loader/LoadingSpinner.tsx";
import Home from "./pages/Home.tsx";
import Person from "./pages/Person.tsx";
import Reviews from "./pages/Reviews.tsx";
import ReviewDetail from "./pages/ReviewDetail.tsx";

const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.tsx"));
const TvDetailsPage = lazy(() => import("./pages/TvDetailsPage.tsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.tsx"));

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
      {
        path: "/person/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Person />
          </Suspense>
        ),
      },
      {
        path: "/reviews/:mediaPlatform/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Reviews />
          </Suspense>
        ),
      },
      {
        path: "/review/:id",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ReviewDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
