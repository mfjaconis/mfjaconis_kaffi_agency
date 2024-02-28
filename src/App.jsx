import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./assets/components/Home";
import { Sobre } from "./assets/components/Sobre";

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./App.module.css";

register();

function App() {
  return (
    <Router>
      <div className={styles.container}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Sobre />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
