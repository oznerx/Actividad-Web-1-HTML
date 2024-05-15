import {
  getCharactersFirstPage,
  getCharacterAtPage,
} from "@/services/characters"
import { CharacterResponse } from "@/types/characters"
import { getCharacterIds } from "@/utils/cookiesFunctions"
import { PageProps } from "@/types/page"
import Header from "../components/Header"
import CharacterList from "@/components/CharacterList"
import PageController from "@/components/PageController"

export default async function Home({ searchParams }: PageProps) {
  const curPage = searchParams.page ?? "1"
  const characters: CharacterResponse =
    curPage == "1"
      ? await getCharactersFirstPage()
      : await getCharacterAtPage(curPage)
  const favoriteCharacters = getCharacterIds()

  return (
    <>
      <Header />
      <CharacterList
        characters={characters.results}
        favoriteCharacters={favoriteCharacters}
      />
      <PageController
        currentPage={curPage}
        previousPage={characters.info.prev}
        nextPage={characters.info.next}
      />
    </>
  )
}
