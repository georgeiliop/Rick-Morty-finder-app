import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import Card from "./components/Card.js";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

function App() {
  const [characters, setCharacters] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchFn = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${query}`
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
  }, [query, currentPage]);

  if (isError) return <div>No results</div>;

  const cardList = characters?.results?.map((character) => {
    return <Card key={character.id} {...character} />;
  });

  return (
    <div className="App">
      <Search
        setQuery={setQuery}
        query={query}
        setCurrentPage={setCurrentPage}
      />
      <Pagination
        characters={characters}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        info={characters?.info}
      />
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
