import { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="collapse">
      <button type="button" className="collapse__header" onClick={toggle}>
        <span className="collapse__title">{title}</span>
        <span className={`collapse__arrow ${isOpen ? "is-open" : ""}`}>⌄</span>
      </button>

      <div className={`collapse__content ${isOpen ? "is-open" : ""}`}>
        <div className="collapse__inner">{children}</div>
      </div>
    </div>
  );
}
