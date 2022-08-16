import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ setCurrentPage, info }) => {
  return (
    <div className="d-flex justify-content-center flex-row pag--style container-fluid">
      <ReactPaginate
        pageCount={info?.pages}
        className="pagination d-flex justify-content-center"
        previousLabel="Prev"
        previousClassName="btn btn-success"
        nextClassName="btn btn-success"
        nextLinkClassName="text-white link--styles"
        previousLinkClassName="text-white link--styles"
        pageClassName="page-item "
        pageLinkClassName="page-link text-success"
        activeClassName="active bg-success"
        activeLinkClassName="bg-success text-white border-0"
        onPageChange={(data) => setCurrentPage(data.selected + 1)}
      />
    </div>
  );
};

export default Pagination;
