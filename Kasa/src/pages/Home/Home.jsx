import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card"
import logements from "../../logements.json"
import homeBanner from "../../assets/home-banner.jpg"

export default function Home() {
  return (
    <div className="home">
      <Banner imageSrc={homeBanner} title="Chez vous, partout et ailleurs" />

      <section className="home__grid" aria-label="Liste des logements">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </div>
  )
}
