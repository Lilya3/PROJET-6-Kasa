import { useState } from "react";
import "../Slideshow/Slideshow.scss";

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const total = pictures.length

  const nextSlide = () => {
    setCurrentIndex(currentIndex === total - 1 ? 0 : currentIndex + 1)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? total - 1 : currentIndex - 1)
  }

  return (
    <div className="slideshow">
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow__image"
      />

      {total > 1 && (
        <>
          <button
            className="slideshow__arrow slideshow__arrow--left"
            onClick={prevSlide}
            >
              ‹
            </button>

          <button className="slideshow__arrow slideshow__arrow--right"
          onClick={nextSlide}
          >
            ›
          </button>

          <span className="slideshow__counter">
            {currentIndex + 1}/{total}
          </span>
        </>
      )}
    </div>
  )
}