import Collapse from "../../components/Collapse/collapse";
import aboutBanner from "../../assets/about-banner.png";

const aboutData = [
  { title: "Fiabilité", content: "..." },
  { title: "Respect", content: "..." },
  { title: "Service", content: "..." },
  { title: "Sécurité", content: "..." },
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
