import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./assets/components/Home";
import { Sobre } from "./assets/components/Sobre";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const router = createBrowserRouter([
  {
    path: "/mfjaconis_kaffi_agency/",
    element: <App />,
    children: [
      {
        path: "/mfjaconis_kaffi_agency/", // Rota raiz vazia para corresponder à HOME
        element: <Home />,
      },
      {
        path: "about", // Caminho "about" para o componente Sobre
        element: <Sobre />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);
