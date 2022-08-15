import React from "react";
import { useEffect } from "react";

const Pagination = (props) => {
  const { characters, pageArray, setPageArray, currentPage } = props;
  useEffect(() => {
    console.log(characters?.info?.pages);
    setPageArray([]);
    const pageNum = characters?.info?.pages;
    for (let i = 0; i < pageNum; i++) {
      setPageArray((prevState) => [...prevState, i]);
    }
  }, [characters, setPageArray]);

  const pag = pageArray.map((page) => {
    return (
      <li className="page-item" key={page}>
        <a className="page-link" href="#">
          {page}
        </a>
      </li>
    );
  });
  return (
    <div className="d-flex justify-content-center flex-row">
      {characters?.info?.pages < 7 ? (
        <div className="d-flex justify-content-center flex-row">{pag} </div>
      ) : (
        <div className="d-flex justify-content-center flex-row">
          <li className="page-item">
            <a className="page-link" href="#">
              {currentPage}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {currentPage + 1}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {currentPage + 2}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {currentPage + 3}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {characters?.info?.pages}
            </a>
          </li>
        </div>
      )}
    </div>
  );
};

export default Pagination;
