import { useParams, Navigate } from "react-router-dom"
import logements from "../../logements.json"

import Slideshow from "../../components/Slideshow/Slideshow";
import Collapse from "../../components/Collapse/collapse";
import Rating from "../../components/Rating/Rating";

import "./Housing.scss"

export default function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/error" replace />;
  }

  return (
    <section className="housing">
      <Slideshow pictures={logement.pictures} />

      <div className="housing__top">
        <div className="housing__left">
          <h1 className="housing__title">{logement.title}</h1>
          <p className="housing__location">{logement.location}</p>

          <ul className="housing__tags">
            {logement.tags.map((tag) => (
              <li key={tag} className="housing__tag">{tag}</li>
            ))}
          </ul>
        </div>

        <div className="housing__right">
          <div className="housing__host">
            <p className="housing__host-name">
              {logement.host.name.split(" ").map((part) => (
                <span key={part}>{part}</span>
              ))}
            </p>

            <img
              className="housing__host-picture"
              src={logement.host.picture}
              alt={`Photo de ${logement.host.name}`}
            />
          </div>

          <Rating value={Number(logement.rating)} />
        </div>
      </div>

      <div className="housing__bottom">
        <Collapse title="Description">
          <p className="housing__text">{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="housing__equipments">
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}
