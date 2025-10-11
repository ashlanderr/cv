import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router";
import { GymTracker, Home, Igron, Nlmk, RedForester } from "./pages";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "cv",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "igron", Component: Igron },
      { path: "nlmk", Component: Nlmk },
      { path: "gym-tracker", Component: GymTracker },
      { path: "red-forester", Component: RedForester },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
