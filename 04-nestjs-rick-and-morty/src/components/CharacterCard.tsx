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
    <div className="relative m-10 flex flex-col items-center overflow-hidden rounded-lg bg-gray-200 p-14">
      <Image
        src={character.image}
        height={200}
        width={200}
        alt={`${character.name} image`}
        className="rounded-lg"
      />

      <div className="mt-7 text-center">
        <button onClick={() => navigateToCharacter(character.id)}>
          <h1 className="text-2xl font-bold text-gray-400">{character.name}</h1>
        </button>

        <p className="pt-4 text-gray-400">
          {character.status} - {character.species}
        </p>

        <p className="text-gray-400">Location: {character.location.name}</p>

        <p className="text-gray-400">Origin: {character.origin.name}</p>
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
