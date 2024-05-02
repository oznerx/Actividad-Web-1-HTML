export async function getCharactersFirstPage(): Promise<CharacterResponse> {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  return response.json();
}

export async function getCharacterAtPage(url: string): Promise<CharacterResponse> {
  const response = await fetch(url);
  return response.json();
}

export async function getCharacterById(id: number): Promise<Character> {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return response.json();
}

export async function getCharactersByIds(ids: number[]): Promise<Character[] | Character> {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`);
  return response.json();
}

export interface Character {

  id: number;
  name: string;
  status: string;
  species: string;
  type: string

  origin: {
      name: string;
      url: string;
  };

  location: {
      name: string;
      url: string;
  };

  image: string;
  episode: string[];
  url: string;
  created: string;

}

export interface CharacterResponse {

  info: {
      count: number;
      pages: number;
      next: string;
      prev: string;
  };
  
  results: Character[];

}