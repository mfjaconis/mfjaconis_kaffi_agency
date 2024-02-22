import { useState } from "react";
import { Home } from "./assets/components/Home";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <main className={styles.container}>
        <Home />
      </main>
    </>
  );
}

export default App;
