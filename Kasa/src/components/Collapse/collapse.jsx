import { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse__header"
        onClick={toggle}
      >
        <span className="collapse__title">{title}</span>

        <span className={`collapse__arrow ${isOpen ? "is-open" : ""}`}>
          <svg
            className="collapse__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M6 15l6-6 6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className={`collapse__content ${isOpen ? "is-open" : ""}`}>
        <div className="collapse__inner">
          {children}
        </div>
      </div>
    </div>
  );
}
