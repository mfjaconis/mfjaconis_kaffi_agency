import Routes from "./Routes.jsx";


import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

function App() {
  return <Routes />;
}

export default App;
