import { Link } from 'react-router-dom';
import logoInstagram from "../../images/instagram.png";
import logoWhatsApp from "../../images/whatsapp.png";
import styles from "./styles.module.css";

export function Social() {
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
    <div className={styles.container}>
      <Link className={styles.container} onClick={handleClickWhatsApp}><img className={styles.img} src={logoWhatsApp} alt='Logo do WhatsApp'/></Link>
      <Link className={styles.container} onClick={handleClickInstagram}><img className={styles.img} src={logoInstagram} alt='Logo do Instagram'/></Link>
    </div>
  );
}
