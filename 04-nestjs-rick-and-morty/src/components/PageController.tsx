"use client"

import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function PageController({
  currentPage,
  previousPage,
  nextPage,
}: {
  currentPage: string
  previousPage: string | null
  nextPage: string | null
}) {
  const router = useRouter()
  const pathname = usePathname()

  const handlePageChange = (page: number) => {
    if (page === -1) {
      if (previousPage) {
        router.push(`${pathname}?page=${parseInt(currentPage) - 1}`)
      }
    } else {
      if (nextPage) {
        router.push(`${pathname}?page=${parseInt(currentPage) + 1}`)
      }
    }
  }

  return (
    <>
      <div className="mx-10 mb-10 flex items-center justify-between">
        <button
          className="rounded-md bg-gray-200 px-6 py-3 text-gray-500"
          onClick={() => handlePageChange(-1)}
          disabled={previousPage == null}
        >
          Prev
        </button>

        <h1 className="text-2xl text-gray-400">Page {currentPage}</h1>

        <button
          className="rounded-md bg-gray-200 px-6 py-3 text-gray-500"
          onClick={() => handlePageChange(1)}
          disabled={nextPage == null}
        >
          Next
        </button>
      </div>
    </>
  )
}
