import "./categoryItem.css";
import heart from "../../../assets/heart.svg";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <img src={item.image} alt="" className="itemImage" />
      <div className="itemDetails">
        <span className="itemDate">{item.date}</span>
        <div className="titleSave">
          <h2 className="itemTitle">{item.name}</h2>
          <img className="itemSave" src={heart} alt="" />
        </div>
        <h3 className="itemCategory">{item.category}</h3>
        <span className="addedItem">{`${item.addedItem} item${
          item.addedItem > 1 ? "s" : ""
        } added`}</span>
        <button className="button">View</button>
      </div>
    </div>
  );
};

export default CategoryItem;
