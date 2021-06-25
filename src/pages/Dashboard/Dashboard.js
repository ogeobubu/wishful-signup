import "./dashboard.css";
import dropDown from "../../assets/dropDown.svg";
import searchIcon from "../../assets/search.svg";
import { React, useState } from "react";
import Category from "../../components/Category/Category";
import dropUp from "../../assets/dropup.png";

const fetchCategories = [
  {
    title: "Fashion",
    label: "fashion",
  },
  {
    title: "Sport",
    label: "sport",
  },
  {
    title: "Blanket",
    label: "blanket",
  },
  {
    title: "Good",
    label: "good",
  },
  {
    title: "Bad",
    label: "bad",
  },
];

const Dashboard = () => {
  const [searchCategories, setSearchCategories] = useState(false);
  const [search, setSearch] = useState("");

  const handleCategories = () => {
    return setSearchCategories(!searchCategories);
  };

  console.log(search);

  return (
    <div className="dashboard">
      <div className="dashboardBody">
        <div className="dashboardContainer">
          <h1 className="wishlistTitle">My Wishlists</h1>
          <div className="searchCategory">
            <img src={searchIcon} alt="" className="searchIcon" />
            <input
              type="text"
              className="searchInput"
              placeholder="Search Category"
            />
            <img
              src={searchCategories ? dropUp : dropDown}
              className="dropDownIcon"
              alt=""
              onClick={handleCategories}
            />
            {searchCategories && (
              <ul className="categoryList">
                {fetchCategories.map((fetchCategory, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      return setSearch(fetchCategory.label);
                    }}
                    className="categoryListItem"
                  >
                    {fetchCategory.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <Category />
      </div>
    </div>
  );
};

export default Dashboard;
