import { navigateToCharacters, navigateToFavorites } from "../navigation";

export default function Header() {
  return (
    <header className="flex justify-between sticky bg-white text-neutral-500 pt-8 px-14 mb-5 text-lg font-bold">

      <button onClick={() => navigateToCharacters()}>
        Characters
      </button>

      <h1 className="text-2xl font-bold">
        Rick and Morty Characters
      </h1>

      <button onClick={() => navigateToFavorites()}>
        Favorites
      </button>

    </header>
  );
}