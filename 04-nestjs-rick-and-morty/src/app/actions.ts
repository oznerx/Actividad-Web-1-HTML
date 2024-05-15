"use server"

import { redirect } from "next/navigation"

export async function navigateToCharacter(id: number) {
  redirect(`/character/${id}`)
}
