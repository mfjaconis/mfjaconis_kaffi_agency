import { Link } from "react-router-dom";
import { Social } from "../Social";
import styles from "./styles.module.css";
import logoKaffi from "../../images/logo-kaffi_agency_mkt.png";

export function Home() {
  const handleClickForms = () => {
    window.open(
      "https://docs.google.com/forms/d/17NRat1zc2SsRM3oJyJhr2jqhSmUO6dYVRkkkunm3Nvg/viewform?edit_requested=true",
      "_blank"
    );
  };

  return (
    <>
      <section className={styles.container}>
        <img
          className={styles.imgLogo}
          src={logoKaffi}
          alt="Logo Kaffi Agency"
        />
        <h1 className={styles.title}>Kaffi Agency</h1>
        <Link className={styles.linkRouters} onClick={handleClickForms}>
          Contrate nossos serviços
        </Link>
        <Link to="/about" className={styles.linkRouters}>
          Quem somos nós
        </Link>
        <Social/>
      </section>
    </>
  );
}
