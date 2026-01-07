export default function Banner ({ imageSrc, title }) {
    return (
        <section className="banner">
            <img className="banner__img" src={imageSrc} alt={title || "Bannière Kasa"} />
            {title ? <h1 className="banner__title">{title}</h1> : null}
        </section>
    )
}