import styles from "./styles.module.css";
import logoKaffi from "../../images/logo-kaffi_agency_mkt.png";


export function Home(){

    return(
        <section className={styles.container}>
            <img className={styles.imgLogo} src={logoKaffi} alt="Logo Kaffi Agency"/>
            <h1 className={styles.title}>Kaffi Agency</h1>
            <button className={styles.btnRouters}>Contrate nossos serviços</button>
            <button className={styles.btnRouters}>Quem somos nós</button>
            <button className={styles.btnRouters}>WhatsApp</button>
        </section>
    );
}







