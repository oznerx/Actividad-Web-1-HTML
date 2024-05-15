"use client"

import { Character } from "@/types/characters"
import { navigateToCharacter } from "../app/actions"
import { setFavoriteCharacter } from "@/actions/characters"
import Image from "next/image"

export default function CharacterCard({
  character,
  isFavorite,
}: {
  character: Character
  isFavorite: boolean
}) {
  return (
    <div className="flex flex-col rounded-lg items-center bg-gray-200 overflow-hidden relative p-14 m-10">

      <Image src={character.image} height={200} width={200} alt={`${character.name} image`} className="rounded-lg"/>

      <div className="text-center mt-7">

        <button onClick={() => navigateToCharacter(character.id)}>

          <h1 className="text-gray-400 text-2xl font-bold">
            {character.name}
          </h1>

        </button>

        <p className="text-gray-400 pt-4">
          {character.status} - {character.species}
        </p>

        <p className="text-gray-400">
          Location: {character.location.name}
        </p>

        <p className="text-gray-400">
          Origin: {character.origin.name}
        </p>

      </div>

      <button
        className="absolute right-10 top-10"
        onClick={() => setFavoriteCharacter(character.id)}
      >
        <Image
          src={isFavorite ? "/filledStar.svg" : "/emptyStar.svg"}
          height={25}
          width={25}
          alt="Favorite"
          className="transition-opacity duration-200 hover:opacity-50"
        />
      </button>
    </div>
  )
}
