"use client"

import { type Character, getCharacterById } from "../../services/character";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Image from "next/image";

export default function Character({ params }: { params: { characterId: number } }) {

  const [character, setCharacter] = useState<Character>();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [canEdit, setCanEdit] = useState<boolean>(false);

  const formatURL = (url: string) => {
    return url.replace("https://rickandmortyapi.com/api/episode/", "");
  }

  useEffect(() => {

    getCharacterById(params.characterId).then((response: Character) => {
      setCharacter(response);
    })

    const favoritesTemp = localStorage.getItem("favorites");

    if (favoritesTemp != null) {
      setFavorites(JSON.parse(favoritesTemp));
    }

    setCanEdit(true);
  }, []);

  useEffect(() => {

    if (canEdit) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

  }, [favorites]);

  const handleFavorite = () => {

    if (favorites.includes(character?.id || -1)) {
      setFavorites(favorites.filter((id) => id !== character?.id));
    } 
    
    else {
      setFavorites([...favorites, character?.id || -1]);
    }

  }
  
  return (
    <>
      <Header />
      
      <div className="flex flex-col">

        <div className="flex flex-col w-full items-center justify-between">

          <div className="rounded-lg overflow-hidden">
            <Image src={character?.image ?? "/emptyUser.png"} height={300} width={300} alt={`${character?.name} image`} />
          </div>

          <div className="flex flex-col justify-between items-center mt-5 space-y-5">

            <h1 className="font-bold text-gray-400 text-6xl mb-4">
              {character?.name}
            </h1>

            <p className="text-gray-400 ml-3 text-xl mb-1">
              {character?.status} - {character?.species}
            </p>

            <p className="text-gray-400 ml-3 text-xl mb-1">
              Origin: {character?.origin.name}
            </p>

            <p className="text-gray-400 ml-3 text-xl">
              Location: {character?.location.name}
            </p>

            <div className="">

              <button className="text-gray-400 bg-gray-200 rounded-md p-5 transition-color" onClick={() => handleFavorite()}>

                <div className="flex items-center gap-3">

                  { favorites.includes(character?.id || -1) ? "Remove from favorites" : "Add to favorites" }

                  <Image src={ favorites.includes(character?.id || -1) ? "/filledStar.svg" : "/emptyStar.svg" } height={30} width={30} alt="Star icon"></Image>

                </div>

              </button>

            </div>
            
          </div>

        </div>

        <h2 className="text-gray-300 text-5xl mt-20 p-5 text-center">
          Episodes 
        </h2>

        <div className="flex items-center ml-3 mt-5 justify-center">

          <ul className="grid grid-flow-row grid-cols-10 gap-7">

            {character?.episode.map((episode) => (
              <button key={episode} className="text-gray-500 ml-4 text-xl list-disc transition-colors duration-200 hover:text-sky-300 select-none"
              >
                {formatURL(episode)}
              </button>
            ))}

          </ul>

        </div>

      </div>
    </>
  );
}