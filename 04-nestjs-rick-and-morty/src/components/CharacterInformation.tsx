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
      <div className="flex w-full flex-col items-center justify-between">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={character?.image ?? "/emptyUser.png"}
            height={300}
            width={300}
            alt={`${character?.name} image`}
          />
        </div>

        <div className="mt-5 flex flex-col items-center justify-between space-y-5">
          <h1 className="mb-4 text-6xl font-bold text-gray-400">
            {character?.name}
          </h1>

          <p className="mb-1 ml-3 text-xl text-gray-400">
            {character?.status} - {character?.species}
          </p>

          <p className="mb-1 ml-3 text-xl text-gray-400">
            Origin: {character?.origin.name}
          </p>

          <p className="ml-3 text-xl text-gray-400">
            Location: {character?.location.name}
          </p>

          <div className="">
            <button
              className="transition-color rounded-md bg-gray-200 p-5 text-gray-400"
              onClick={() => setFavoriteCharacter(character.id)}
            >
              <div className="flex items-center gap-3">
                {favoriteCharacters.includes(character?.id || -1)
                  ? "Remove from favorites"
                  : "Add to favorites"}

                <Image
                  src={
                    favoriteCharacters.includes(character?.id || -1)
                      ? "/filledStar.svg"
                      : "/emptyStar.svg"
                  }
                  height={30}
                  width={30}
                  alt="Star icon"
                ></Image>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
