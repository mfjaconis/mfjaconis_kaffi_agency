import { register } from "swiper/element/bundle";
import { Switch, Route } from "react-router-dom";
import { Home } from "./assets/components/Home";
import { Sobre } from "./assets/components/Sobre";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <main className={styles.container}>
        <Home />
        <Switch>
          <Route exact path="/about">
            <Sobre />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
