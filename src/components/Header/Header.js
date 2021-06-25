import "./header.css";
import singleLogo from "../../assets/singleLogo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <div className="headerLeft">
          <div className="logo">
            <img src={singleLogo} className="headerLogo" alt="" />
          </div>
          <span className="headerLogoTitle">wishful</span>
        </div>
        <div className="headerCenter">
          <div className="createShare">
            <span className="createWishlist">Create Wishlist</span>
            <span className="shareWishlist">Share wish</span>
          </div>
          <ul className="navList">
            <li className="navListItem">About</li>
            <li className="navListItem">Features</li>
            <li className="navListItem">Contact</li>
          </ul>
        </div>
        <div className="headerRight">
          <div className="buttonAuthLogin">Log in</div>
          <div className="buttonAuthSign">Sign up</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
