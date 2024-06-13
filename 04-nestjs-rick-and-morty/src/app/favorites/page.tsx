import { getFavoriteCharacters } from "@/services/characters"
import CharacterCard from "../../components/CharacterCard"
import Header from "../../components/Header"

export default async function Favorites() {
  const characters = await getFavoriteCharacters()

  return (
    <>
      <Header />
      <div>
        {Array.isArray(characters) && characters.length == 0 && (
          <h1 className="ml-5 flex justify-center text-6xl text-gray-400">
            Add some characters to favorites!
          </h1>
        )}

        <div className="grid grid-flow-row grid-cols-3 p-4">
          {!Array.isArray(characters) && characters != null ? (
            <CharacterCard character={characters} isFavorite={true} />
          ) : (
            <>
              {characters?.map((character) => (
                <CharacterCard
                  key={character.id}
                  character={character}
                  isFavorite={true}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  )
}
