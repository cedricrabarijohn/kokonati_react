import "./footer.css";
import kokonatiSvg from "./assets/kokonati.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-logo">
            <img src={kokonatiSvg} alt="kokonati" />
          </div>
          <div className="footer-top-left-email">kokonati@moist.mail</div>
        </div>
        <div className="footer-top-right">
          <div className="footer-top-right-first">
            <div className="footer-menu">Home</div>
            <div className="footer-menu">Shop</div>
            <div className="footer-menu">Contact us</div>
          </div>
          <div className="footer-top-right-second">
            <div className="footer-menu">Track your order</div>
            <div className="footer-menu">Shipping & Refunds</div>
            <div className="footer-menu">Frequently asked questions</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>FACEBOOK</p>
        <p>INSTAGRAM</p>
        <p>TWITTER</p>
      </div>
    </div>
  );
};
export default Footer;
