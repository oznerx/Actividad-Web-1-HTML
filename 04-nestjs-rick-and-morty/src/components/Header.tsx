import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky mb-5 flex justify-between bg-white px-14 pt-8 text-lg font-bold text-neutral-500">
      <Link href="/">Characters</Link>

      <h1 className="text-2xl font-bold">Rick and Morty Characters</h1>

      <Link href="/favorites">Favorites</Link>
    </header>
  )
}
