import Collapse from "../../components/Collapse/collapse";
import aboutBanner from "../../assets/about-banner.png";

const aboutData = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.",
  },
];

export default function About() {
  return (
    <div className="about">
      <img className="about__banner" src={aboutBanner} alt="Bannière À propos" />

      <section className="about__collapses">
        {aboutData.map((item) => (
          <Collapse key={item.title} title={item.title}>
            {item.content}
          </Collapse>
        ))}
      </section>
    </div>
  );
}
