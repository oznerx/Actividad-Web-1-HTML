import { render, screen } from "@testing-library/react"
import CharacterEpisodes from "@/components/CharacterEpisodes"
import "@testing-library/jest-dom"

describe("CharacterEpisodes", () => {
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
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
    type: "Main character",
  }

  const renderComponent = () => {
    return render(<CharacterEpisodes character={character} />)
  }

  it("should render episodes correctly", () => {
    renderComponent()

    character.episode.forEach((episode) => {
      const episodeNumber = episode.replace(
        "https://rickandmortyapi.com/api/episode/",
        "",
      )
      expect(screen.getByText(episodeNumber)).toBeInTheDocument()
    })
  })

  it("should format URLs correctly", () => {
    renderComponent()

    character.episode.forEach((episode) => {
      const formattedEpisode = episode.replace(
        "https://rickandmortyapi.com/api/episode/",
        "",
      )
      expect(screen.getByText(formattedEpisode)).toBeInTheDocument()
    })
  })

  it("should have correct button classes and attributes", () => {
    renderComponent()

    character.episode.forEach((episode) => {
      const formattedEpisode = episode.replace(
        "https://rickandmortyapi.com/api/episode/",
        "",
      )
      const button = screen.getByText(formattedEpisode)

      expect(button).toHaveClass(
        "text-gray-500 ml-4 text-xl list-disc transition-colors duration-200 hover:text-sky-300 select-none",
      )
    })
  })
})
