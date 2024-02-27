import { register } from "swiper/element/bundle";
import { Outlet } from "react-router-dom";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./App.module.css";

function App() {
  return (
      <main className={styles.container}>
        <Outlet />
      </main>
  );
}

export default App;
