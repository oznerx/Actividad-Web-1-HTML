import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between sticky bg-white text-neutral-500 pt-8 px-14 mb-5 text-lg font-bold">
      <Link href="/">Characters</Link>

      <h1 className="text-2xl font-bold">
        Rick and Morty Characters
      </h1>

      <Link href="/favorites">Favorites</Link>
    </header>
  )
}
