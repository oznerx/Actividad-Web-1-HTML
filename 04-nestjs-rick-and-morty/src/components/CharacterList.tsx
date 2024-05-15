"use client"

import CharacterCard from "./CharacterCard"
import { Character } from "@/types/characters"

export default function CharacterList({
  characters,
  favoriteCharacters,
}: {
  characters: Character[]
  favoriteCharacters: number[]
}) {
  return (
    <div className="grid grid-flow-row grid-cols-3 p-4">
      {characters?.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isFavorite={favoriteCharacters.includes(character.id)}
        />
      ))}
    </div>
  )
}
