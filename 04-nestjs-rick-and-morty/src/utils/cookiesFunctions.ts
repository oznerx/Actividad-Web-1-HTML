import { cookies } from "next/headers"
import { FAVORITE_CHARACTERS_COOKIE } from "@/const/cookies"

export function getCharacterIds(): number[] {
  const cookie = cookies().get(FAVORITE_CHARACTERS_COOKIE)?.value
  return cookie ? cookie.split(",").map((value) => Number(value)) : []
}

export function setCookie(name: string, value: string) {
  const cookieStore = cookies()

  cookieStore.set(name, value, {
    path: "/",
    secure: true,
    sameSite: true,
    httpOnly: true,
  })
}
