import "./footer.css";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLeft">
          <div className="footLogoTitle">
            <div className="footLogo">
              <img src={logo} alt="" className="footerLogo" />
            </div>
            <span className="footerLogoTitle">wishful</span>
          </div>
          <ul className="footerLink">
            <li className="footerLinkItem">About</li>
            <li className="footerLinkItem">Features</li>
            <li className="footerLinkItem">Contact</li>
            <li className="footerLinkItem">Mobile App</li>
          </ul>
        </div>
        <div className="footerRight">
          <span className="terms">Terms of services</span>
          <span className="privacy">Privacy Policy</span>
          <span className="date">
            &copy;{new Date().getFullYear()} Wishful. All Right Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
