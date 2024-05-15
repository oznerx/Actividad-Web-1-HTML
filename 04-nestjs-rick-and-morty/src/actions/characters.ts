"use server"

import { FAVORITE_CHARACTERS_COOKIE } from "@/const/cookies"
import { getCharacterIds, setCookie } from "@/utils/cookiesFunctions"

export async function setFavoriteCharacter(characterId: number): Promise<void> {
  const favoriteCharacters = getCharacterIds()
  let newFavorites: number[] = []
  if (favoriteCharacters.includes(characterId))
    newFavorites = favoriteCharacters.filter((id) => id !== characterId)
  else newFavorites = [...favoriteCharacters, characterId]
  setCookie(FAVORITE_CHARACTERS_COOKIE, newFavorites.join(","))
}
