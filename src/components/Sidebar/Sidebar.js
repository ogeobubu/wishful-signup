import "./sidebar.css";
import avatar from "../../assets/avatar.png";
import heart from "../../assets/heart.png";
import category from "../../assets/category.png";
import dropDown from "../../assets/dropDown.svg";
import share from "../../assets/share.png";
import calendar from "../../assets/calendar.svg";
import create from "../../assets/create.svg";
import dropUp from "../../assets/dropup.png";

import { useState } from "react";

const sidebarData = [
  {
    icon: heart,
    title: "My Wishlist",
    link: "/wishlist",
  },
  {
    icon: category,
    title: "Category",
    link: "/category",
    iconClosed: dropDown,
    iconOpen: dropUp,
    drop: [
      {
        title: "List one",
        link: "/wishlist",
      },
      {
        title: "List two",
        link: "/wishlist",
      },
      {
        title: "List three",
        link: "/wishlist",
      },
      {
        title: "List four",
        link: "/wishlist",
      },
      {
        title: "List five",
        link: "/wishlist",
      },
    ],
  },
  {
    icon: share,
    title: "Share Wish",
    link: "/share",
  },
  {
    icon: calendar,
    title: "Calendar",
    link: "/calender",
  },
];

const Sidebar = () => {
  const [subCategory, setSubCategory] = useState(false);

  const showSubCategory = () => {
    return setSubCategory(!subCategory);
  };

  return (
    <div className="sidebar">
      <div className="sidebarTop">
        <span className="sidebarUser">
          <img src={avatar} alt="" className="sidebarUserImage" />
        </span>
        <span className="sidebarUsername">Ben Josh</span>
      </div>
      <div className="sidebarCenter">
        <div className="sidebarCenterContainer">
          {sidebarData.map((data) => (
            <div onClick={data.drop && showSubCategory}>
              <div className="sidebarItem">
                <div className="iconTitle">
                  <img className="sidebarItemIcon" src={data.icon} alt="" />
                  <span className="sidebarItemTitle">{data.title}</span>
                </div>
                <div className="dropDownList">
                  <img
                    className="dropDownIcon"
                    src={
                      data.drop && subCategory
                        ? data.iconOpen
                        : data.drop
                        ? data.iconClosed
                        : null
                    }
                    alt=""
                  />
                </div>
              </div>
              <div>
                {data.drop && subCategory ? (
                  <div className="dropDownCategories">
                    {data.drop?.map((dropItem) => (
                      <div className="dropDownListCategory">
                        <span className="dropDownListItemCategory">
                          {dropItem.title}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sidebarBottom">
        <div className="sideBottomContainer">
          <div className="addNewWishlist">Add new wishlists</div>
          <img src={create} alt="" className="sideBottomIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
