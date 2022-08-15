import React from "react";
import backgroundimg from "../images/background.jpg";

const Navbar = (props) => {
  return (
    <nav className="navbar  navbar--styles">
      <img
        src={backgroundimg}
        className="img--style"
        alt="rick and morty background"
      />
      <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex justify-content-center container search--styles">
          <input
            type="search"
            className="form-control me-2"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              props.setQuery(e.target.value);
              props.setCurrentPage(0);
            }}
            value={props.query}
          />
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
