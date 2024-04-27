"use client"

import CharacterCard from "./components/CharacterCard";
import { CharacterResponse, getCharacterAtPage, getCharactersFirstPage } from "./services/character";
import { useEffect, useState } from "react";
import Header from "./components/Header";

export default function Home() {
  const [characters, setCharacters] = useState<CharacterResponse>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [favorites,  setFavorites] = useState<number[]>([]);
  const [canEdit, setCanEdit] = useState<boolean>(false);

  useEffect(() => {
    getCharactersFirstPage().then((response: CharacterResponse) => {
      setCharacters(response);
    });

    // Get favorites from local storage
    const favorites = localStorage.getItem("favorites");
    if (favorites != null) {
      setFavorites(JSON.parse(favorites));
    }

    setCanEdit(true);
  }, []);

  useEffect(() => {
    if (canEdit) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const handlePageChange = (next: number) => {
    if (characters == null) return;

    getCharacterAtPage(next === -1 ? characters?.info.prev : characters?.info.next).then((response: CharacterResponse) => {
      setCharacters(response);
      setCurrentPage(currentPage + next);
    });
  }

  return (
    <>
      <Header />
      <div className="grid grid-flow-row grid-cols-3 p-4">
        {characters?.results.map((character) => (
          <CharacterCard key={character.id} character={character} favorites={favorites} setFavorites={setFavorites} />
        ))}
      </div>
      
      <footer className="flex mb-10 items-center justify-between mx-10">
        <button 
          className="bg-gray-200 text-gray-500 px-6 py-3 rounded-md"
          onClick={() => handlePageChange(-1)} 
          disabled={characters?.info.prev == null}
        >
          Previous
        </button>

        <h1 className="text-gray-400 text-2xl">
          Page {currentPage}
        </h1>

        <button 
          className="bg-gray-200 text-gray-500 px-6 py-3 rounded-md"
          onClick={() => handlePageChange(1)} 
          disabled={characters?.info.next == null}
        >
          Next
        </button>
      </footer>
    </>
  );
}
