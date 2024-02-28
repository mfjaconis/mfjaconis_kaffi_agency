import logoKaffi from "../../images/logo-kaffi_agency_mkt.png";
import Icon from '@mdi/react';
import { mdiArrowLeftBold } from '@mdi/js';
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

export function Sobre() {
  const data = [
    {
      id: "1",
      title: "O poder da criatividade para sua marca brilhar!",
      image: logoKaffi,
    },
    {
      id: "2",
      title: "MISSÃO",
      image: "",
      text: "Nossa missão na KAFFI, é ser a ponte que conecta visões ambiciosas de marcas a estratégias digitais transformadoras. Trabalhamos incansavelmente para impulsionar mudanças significativas e redefinir posicionamentos no mercado. Ao fazê-lo, buscamos não apenas atender, mas superar as expectativas de nossos clientes, proporcionando-lhes uma presença digital impactante que destaca e fortalece suas narrativas únicas no cenário competitivo. Estamos comprometidos em ser a força que capacita marcas a alcançarem novos horizontes e a construírem legados duradouros no mundo digital.",
    },
    {
      id: "3",
      title: "VISÃO",
      image: "",
      text: "Ser referência em marketing estratégico, redefinindo o padrão de excelência na gestão completa dos negócios dos clientes. Buscamos ser reconhecidos pela inovação, comprometimento e impacto positivo nas empresas, capacitando-as a atingir novos patamares de sucesso. ",
    },
    {
      id: "4",
      title: "VALORES",
      image: "",
      text: "Na KAFFI, acreditamos na força da criatividade e inovação para impulsionar soluções únicas. Guiados por dados, buscamos resultados impactantes. Valorizamos a colaboração inspiradora, onde cada voz contribui para o sucesso. Adotamos a agilidade e adaptação como pilares, permitindo-nos evoluir constantemente. Esses valores não são apenas princípios, são a base da nossa jornada em busca do excepcional.",
    },
    {
      id: "5",
      title: "COMO TRABALHAMOS:",
      image: "",
      text: "Imagina a gente caminhando e crescendo juntos? Pois é, aqui na nossa agência, a ideia é parecida. Sabe aquelas coisas legais que a tecnologia pode fazer?  Exploramos tudo isso e juntamos com estratégias pensadas nos mínimos detalhes. É como se a gente achasse uma nova maneira da nossa marca favorita brilhar, sabe? E o mais incrível é que a gente não só mexe nas oportunidades online, mas também bate papo direto com o que a marca quer e sonha. O resultado? Uma presença e uma conexão forte com quem curte o que ela oferece. E no final dascontas, um sucesso que nem dava pra imaginar antes. É como se a gente estivesse construindo isso juntos. E estamos mesmo, porque o que a gente quer é ver todo mundo brilhando!",
    },
  ];

  return (
    <>
      <section className={styles.container}>
        <div>
          <Link to="/mfjaconis_kaffi_agency/" className={styles.home}>
          <Icon className={styles.arrow} vertical path={mdiArrowLeftBold} size={1} /> Voltar
          
          </Link>
        </div>
        <div className={styles.content}>
          <Swiper
            style={{
              "--swiper-pagination-color": "var(--second-color)",
              "--swiper-navigation-color": "var(--second-color)",
            }}
            slidesPerView={1}
            pagination={true}
            navigation
            className={styles.swiper}
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <h1 className={styles.title}> {item.title} </h1>
                {item.image && (
                  <img className={styles.img} src={item.image} alt="Slider" />
                )}
                <p className={styles.paragraph}>{item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
