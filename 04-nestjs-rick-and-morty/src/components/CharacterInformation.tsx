"use client"

import { Character } from "@/types/characters"
import { setFavoriteCharacter } from "@/actions/characters"
import Image from "next/image"

export default function CharacterInformation({
  character,
  favoriteCharacters,
}: {
  character: Character
  favoriteCharacters: number[]
}) {
  return (
    <>

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

            <button className="text-gray-400 bg-gray-200 rounded-md p-5 transition-color" onClick={() => setFavoriteCharacter(character.id)}>

              <div className="flex items-center gap-3">

                { favoriteCharacters.includes(character?.id || -1) ? "Remove from favorites" : "Add to favorites" }

                <Image src={ favoriteCharacters.includes(character?.id || -1) ? "/filledStar.svg" : "/emptyStar.svg" } height={30} width={30} alt="Star icon"></Image>

              </div>

            </button>

          </div>
          
        </div>

      </div>

    </>
  )
}
