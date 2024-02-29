import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiWhatsapp } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import styles from "./styles.module.css";
import logoKaffi from "../../images/logo-kaffi_agency_mkt.png";

export function Home() {

  const handleClickForms = () => {
    window.open(
      "https://docs.google.com/forms/d/17NRat1zc2SsRM3oJyJhr2jqhSmUO6dYVRkkkunm3Nvg/viewform?edit_requested=true",
      "_blank"
    );
  };

  const handleClickInstagram = () => {
    window.open(
      "https://www.instagram.com/kaffiagency/",
      "_blank"
    );
  };

  const handleClickWhatsApp = () => {
    const phoneNumber = "5511972130564";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.container}>
      <img className={styles.imgLogo} src={logoKaffi} alt="Logo Kaffi Agency" />
      <h1 className={styles.title}>Kaffi Agency</h1>
      <Link className={styles.linkRouters} onClick={handleClickForms}>
        Contrate nossos serviços
      </Link>
      <Link to="about" className={styles.linkRouters}>
        Quem somos nós
      </Link>
      <Link onClick={handleClickWhatsApp} className={styles.linkRoutersSocial}>
      <Icon className={styles.icon}  path={mdiWhatsapp} size={1} /> WhatsApp
      </Link>
      <Link onClick={handleClickInstagram} className={styles.linkRoutersSocial}>
      <Icon className={styles.icon} path={mdiInstagram} size={1} /> Instagram
      </Link>
    </section>
  );
}
