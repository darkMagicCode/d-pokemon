import { Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { RootErrorBoundary } from "@/shared/error";
import { AppLayout } from "@/shared/components/templates";
import { Spinner } from "@/shared/loading";
import { pokemonRoutes } from "@/features/pokemon";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <Outlet />
      </AppLayout>
    ),
    errorElement: <RootErrorBoundary homePath="/pokemon" />,
    children: [
      {
        index: true,
        element: <Navigate to="/pokemon" replace />,
      },
      pokemonRoutes,
      {
        path: "*",
        element: <Navigate to="/pokemon" replace />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};
