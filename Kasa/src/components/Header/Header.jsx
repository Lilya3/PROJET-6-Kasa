import { NavLink } from "react-router-dom"
import logoKaza from "../../assets/logo-kaza.svg"

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/">
          <img className="header__logo" src={logoKaza} alt="Logo Kaza" />
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
            end
          >
            Accueil
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            À Propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
