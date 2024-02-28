import { Route, BrowserRouter } from "react-router-dom";

import { Home } from "./assets/components/Home";
import { Sobre } from "./assets/components/Sobre";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Sobre} path="/sobre" />
    </BrowserRouter>
  );
};

export default Routes;
