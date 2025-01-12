import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Contat from "./Components/Contat.jsx";
import Erro from "./Components/Erro.jsx";
import Header from "./Components/Header.jsx";
import CountryDetail from "./Components/CountryDetail.jsx";
import CountryDetailShimmer from "./Components/countryDetailShimmer.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Header />
        <Erro />{" "}
      </>
    ),
    children: [
      {
        path: "/cont",
        element: <Contat />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: ":country",
        element: <CountryDetail />,
      },
      {
        path: "shimmer",
        element: <CountryDetailShimmer />,
      },
      
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
