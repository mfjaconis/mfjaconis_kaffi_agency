import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./assets/components/Home";
import { Sobre } from "./assets/components/Sobre";
import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<Sobre />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
