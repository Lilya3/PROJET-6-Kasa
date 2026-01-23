import "./Footer.scss";
import logoFooter from "../../assets/logo-footer.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <img className="footer__logo" src={logoFooter} alt="Kasa" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
