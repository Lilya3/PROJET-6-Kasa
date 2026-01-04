import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <NavLink to="/" className="header__logo">
                Kasa
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
                    À propos
                </NavLink>
            </nav>
        </header>
    )
}