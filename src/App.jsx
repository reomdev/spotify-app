import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "./App.scss";
import Login from "./pages/Login/login";
import Home from "./pages/Home/home";
import Albums from "./pages/Albums/albums";
import Artist from "./pages/Artist/artist";
import Header from "./components/Header/header";

const HeaderLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/artist/:id",
        element: <Artist />,
      },
      {
        path: "/albums",
        element: <Albums />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
