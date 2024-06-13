import { render, screen, fireEvent } from "@testing-library/react"
import CharacterInformation from "@/components/CharacterInformation"
import { setFavoriteCharacter } from "@/actions/characters"
import { vi } from "vitest"
import "@testing-library/jest-dom"

vi.mock("@/actions/characters")

describe("CharacterInformation", () => {
  const character = {
    image: "https://example.com/image.jpg",
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Earth",
      url: "https://rickandmortyapi.com/api/location/20",
    },
    episode: ["https://rickandmortyapi.com/api/episode/1"],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
    type: "Main character",
  }

  const favoriteCharacters = [1, 2, 3]

  const renderComponent = (favoriteCharactersList = favoriteCharacters) => {
    return render(
      <CharacterInformation
        character={character}
        favoriteCharacters={favoriteCharactersList}
      />,
    )
  }

  afterEach(() => {
    vi.clearAllMocks()
  })

  it("should render character information correctly", () => {
    renderComponent()

    expect(screen.getByAltText(`${character.name} image`)).toBeInTheDocument()
    expect(screen.getByText(character.name)).toBeInTheDocument()
    expect(
      screen.getByText(`${character.status} - ${character.species}`),
    ).toBeInTheDocument()
    expect(
      screen.getByText(`Origin: ${character.origin.name}`),
    ).toBeInTheDocument()
    expect(
      screen.getByText(`Location: ${character.location.name}`),
    ).toBeInTheDocument()
  })

  it('should display "Remove from favorites" if character is in favoriteCharacters', () => {
    renderComponent()

    expect(screen.getByText("Remove from favorites")).toBeInTheDocument()
    expect(screen.getByAltText("Star icon")).toHaveAttribute(
      "src",
      "/filledStar.svg",
    )
  })

  it('should display "Add to favorites" if character is not in favoriteCharacters', () => {
    renderComponent([])

    expect(screen.getByText("Add to favorites")).toBeInTheDocument()
    expect(screen.getByAltText("Star icon")).toHaveAttribute(
      "src",
      "/emptyStar.svg",
    )
  })

  it("should call setFavoriteCharacter with correct ID when favorite button is clicked", () => {
    renderComponent()

    fireEvent.click(screen.getByText("Remove from favorites"))

    expect(setFavoriteCharacter).toHaveBeenCalledWith(character.id)
  })
})
