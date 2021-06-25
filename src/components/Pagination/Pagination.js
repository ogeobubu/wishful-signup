import "./pagination.css";
import previous from "../../assets/previous.png";
import next from "../../assets/next.png";
import { useEffect, useState } from "react";

const Pagination = ({
  categoriesOnAPage,
  totalCategories,
  firstPage,
  paginate,
}) => {
  const numberOfPage = [];

  for (let i = 1; i <= Math.ceil(totalCategories / categoriesOnAPage); i++) {
    numberOfPage.push(i);
    // console.log(numberOfPage.length);
  }

  return (
    <nav>
      <ul className="pagination">
        {numberOfPage.map((value) => (
          <div key={value}>{console.log(value)}</div>
        ))}

        <div className="prev">
          <img
            className="leftClick"
            src={previous}
            alt=""
            // onClick={() => paginate(+paginateValue)}
          />
        </div>
        <span className="currentPageNumber">
          Page {firstPage} / {numberOfPage.length}
        </span>
        <div className="next">
          <img src={next} alt="" />
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
