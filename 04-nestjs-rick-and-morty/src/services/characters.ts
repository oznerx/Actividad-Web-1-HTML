import {
  CharacterSchema,
  Character,
  CharacterResponseSchema,
  CharacterResponse,
  CharacterArraySchema,
} from "@/types/characters"
import { getCharacterIds } from "@/utils/cookiesFunctions"

export async function getCharactersFirstPage(): Promise<CharacterResponse> {
  const response = await fetch("https://rickandmortyapi.com/api/character")
  const responseObject = await response.json()
  const parsedResponse = CharacterResponseSchema.safeParse(responseObject)

  if (!parsedResponse.success) {
    throw new Error(parsedResponse.error.errors[0].message)
  }

  return responseObject
}

export async function getCharacterAtPage(
  pageNum: string,
): Promise<CharacterResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${pageNum}`,
  )
  const responseObject = await response.json()
  const parsedResponse = CharacterResponseSchema.safeParse(responseObject)

  if (!parsedResponse.success) {
    throw new Error(parsedResponse.error.errors[0].message)
  }

  return responseObject
}

export async function getCharacterById(id: number): Promise<Character> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  )
  const responseObject = await response.json()
  const parsedResponse = CharacterSchema.safeParse(responseObject)

  if (!parsedResponse.success) {
    throw new Error(parsedResponse.error.errors[0].message)
  }

  return responseObject
}

export async function getFavoriteCharacters(): Promise<
  Character[] | Character
> {
  const favoriteIds = getCharacterIds()

  if (favoriteIds.length === 0) {
    return []
  }

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${favoriteIds.join(",")}`,
  )
  const responseObject = await response.json()
  const parsedIndividualResponse = CharacterSchema.safeParse(responseObject)
  const parsedMultipleResponse = CharacterArraySchema.safeParse(responseObject)

  if (!parsedIndividualResponse.success && !parsedMultipleResponse.success) {
    if (parsedIndividualResponse.error) {
      throw new Error(parsedIndividualResponse.error.errors[0].message)
    } else if (parsedMultipleResponse.error) {
      throw new Error(parsedMultipleResponse.error.errors[0].message)
    }
  }

  return responseObject
}
