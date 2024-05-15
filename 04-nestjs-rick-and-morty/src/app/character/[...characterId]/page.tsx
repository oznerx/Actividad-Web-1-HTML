import { type Character } from "@/types/characters"
import { getCharacterById } from "@/services/characters"
import { getCharacterIds } from "@/utils/cookiesFunctions"
import Header from "../../../components/Header"
import CharacterInformation from "@/components/CharacterInformation"
import CharacterEpisodes from "@/components/CharacterEpisodes"

export default async function Character({
  params,
}: {
  params: { characterId: number }
}) {
  const character = await getCharacterById(params.characterId)
  const favoriteCharacters = getCharacterIds()

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center">
        <div className="flex gap-5">
          <CharacterInformation
            character={character}
            favoriteCharacters={favoriteCharacters}
          />
        </div>

        <h2 className="mt-7 text-4xl text-gray-300">Episodes:</h2>

        <CharacterEpisodes character={character} />
      </div>
    </>
  )
}
