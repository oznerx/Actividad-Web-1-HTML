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
    <div className="ml-3 mt-5 flex items-center justify-center">
      <ul className="grid grid-flow-row grid-cols-10 gap-7">
        {character?.episode.map((episode) => (
          <button
            key={episode}
            className="ml-4 select-none list-disc text-xl text-gray-500 transition-colors duration-200 hover:text-sky-300"
          >
            {formatURL(episode)}
          </button>
        ))}
      </ul>
    </div>
  )
}
