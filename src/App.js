import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./components/Card.js";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [pageArray, setPageArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchFn = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        const data = await res.json();
        setCharacters(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFn();
  }, [query]);

  const getNextPage = () => {
    if (characters.info.next != null) {
      fetch(`${characters.info.next}`)
        .then((response) => response.json())
        .then((character) => setCharacters(character));
    }
    if (currentPage < characters.info.pages - 4)
      setCurrentPage((prev) => prev + 1);
  };

  const getPrevPage = () => {
    if (characters.info.prev != null) {
      fetch(`${characters.info.prev}`)
        .then((response) => response.json())
        .then((character) => setCharacters(character));
    }
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  if (isError) return <div>No results</div>;

  const cardList = characters?.results?.map((character) => {
    return <Card key={character.id} {...character} />;
  });

  console.log(pageArray);

  return (
    <div className="App">
      <Navbar
        setQuery={setQuery}
        query={query}
        setCurrentPage={setCurrentPage}
      />
      <nav aria-label="Page navigation example ">
        <ul className="pagination d-flex justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={getPrevPage}>
              Previous
            </a>
          </li>
          <Pagination
            pageArray={pageArray}
            setPageArray={setPageArray}
            characters={characters}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <li className="page-item">
            <a className="page-link" onClick={getNextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      {isError ? <div>error</div> : <div></div>}
      {isLoading || !characters ? (
        <div>w8 bro</div>
      ) : (
        <div className="characters--container">{cardList}</div>
      )}
    </div>
  );
}

export default App;
