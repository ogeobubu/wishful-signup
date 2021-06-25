import "./dashboardHeader.css";
import logo from "../../assets/logo.png";
import bell from "../../assets/bell.svg";
import avatar from "../../assets/avatar.png";

const DashboardHeader = () => {
  return (
    <div className="dashboardHeader">
      <div className="dashboardHeaderContainer">
        <div className="dashboardHeaderLeft">
          <div className="dashLogo">
            <img src={logo} className="dashboardHeaderLogo" alt="" />
          </div>
          <span className="dashboardHeaderTitle">wishful</span>
        </div>
        <div className="dashboardHeaderCenter">
          <div className="wishlistFriends">
            <div className="wishlistHeader active">My Wishlist</div>
            <div className="friendsHeader">Friends</div>
          </div>
          <ul className="navList">
            <li className="navListItem">About</li>
            <li className="navListItem">Features</li>
            <li className="navListItem">Contact</li>
          </ul>
        </div>
        <div className="dashboardHeaderRight">
          <img src={bell} alt="" className="bellNotification" />
          <div className="user">
            <img src={avatar} alt="" className="userIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
