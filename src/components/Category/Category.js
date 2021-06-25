import "./category.css";
import blank from "../../assets/blank.svg";
import CategoryItem from "./CategoryItem/CategoryItem";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/Pagination";

const fetchWishlistsItems = [
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 1000,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 1,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 2,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 3,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 4,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 5,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 8,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 9,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 10,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 11,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 12,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 13,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 14,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 3,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 3,
  },
  {
    image: blank,
    date: "12th June 2021, 7:25pm",
    name: "Red Sneakers",
    category: "Fashion",
    addedItem: 3,
  },
];

const Category = () => {
  const [firstPage, setFirstPage] = useState(1);
  const [categoriesOnAPage, setCategoriesOnAPage] = useState(9);

  const lastItem = firstPage * categoriesOnAPage;
  const firstItem = lastItem - categoriesOnAPage;
  const firstItemsView = fetchWishlistsItems.slice(firstItem, lastItem);

  const paginate = (value) => setCategoriesOnAPage(value);

  return (
    <div className="category">
      <div className="categoryItems">
        {firstItemsView?.map((item, index) => (
          <div className="gap" key={index}>
            <CategoryItem item={item} />
          </div>
        ))}
      </div>
      <Pagination
        firstPage={firstPage}
        categoriesOnAPage={categoriesOnAPage}
        totalCategories={fetchWishlistsItems.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Category;
