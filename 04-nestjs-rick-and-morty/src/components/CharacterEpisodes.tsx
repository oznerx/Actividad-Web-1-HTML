"use client"

import { Character } from "@/types/characters"

export default function CharacterEpisodes({
  character,
}: {
  character: Character
}) {
  const formatURL = (url: string) => {
    return url.replace("https://rickandmortyapi.com/api/episode/", "")
  }

  return (
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
  )
}
