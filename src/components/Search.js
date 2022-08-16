import React from "react";
import backgroundimg from "../images/background.jpg";

const Search = (props) => {
  return (
    <nav className="navbar  navbar--styles">
      <img
        src={backgroundimg}
        className="img--style shadow"
        alt="rick and morty background"
      />
      <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex justify-content-center container search--styles">
          <input
            type="search"
            className="form-control me-2 shadow"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              props.setQuery(e.target.value);
              props.setCurrentPage(0);
            }}
            value={props.query}
          />
          <button className="btn btn-success shadow">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Search;
