"use client"

import { useState, useEffect } from "react";
import { getCharactersByIds} from "../services/character";
import { Character } from "../types/characters"
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header";

export default function Favorites() {

  const [favorites, setFavorites] = useState<number[]>([]);
  const [characters, setCharacters] = useState<Character[] | Character>();
  const [canEdit, setCanEdit] = useState<boolean>(false);

  useEffect(() => {

    const favoritesTemp = localStorage.getItem("favorites");

    if (favoritesTemp != null) {
      setFavorites(JSON.parse(favoritesTemp));
    }

  }, []);

  useEffect(() => {

    if (!canEdit) {

      if (favorites?.length > 0) {

        getCharactersByIds(favorites).then((characters) => {

          if (!Array.isArray(characters)) {
            characters = [characters];
          }

          setCharacters(characters);
          setCanEdit(true);

        });

      }

    } 
    
    else {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

  }, [favorites])

  return (
    <>
      <Header />

      <div>

        { (favorites.length == 0) && <h1 className="flex text-gray-400 justify-center text-6xl ml-5">Add some characters to favorites!</h1> }

        {(!Array.isArray(characters) && characters != null) ? (
          <CharacterCard character={characters} favorites={favorites} setFavorites={setFavorites} />
        ) : (
          <div className="grid grid-flow-row grid-cols-3 p-4">

            {characters?.map((character) => (
              (favorites.find((id) => id === character.id)) &&
              <CharacterCard key={character.id} character={character} favorites={favorites} setFavorites={setFavorites} />
            ))}

          </div>
        )}

      </div>
    </>
  );
}