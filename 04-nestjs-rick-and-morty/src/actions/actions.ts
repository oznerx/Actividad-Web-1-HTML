"use server"

import { redirect } from "next/navigation"

export async function navigateToCharacter(id: number) {
  redirect(`/character/${id}`)
}

export async function navigateToFavorites() {
  redirect("/favorites")
}

export async function navigateToHome() {
  redirect("/")
}

export async function navigateToLogin() {
  redirect("/auth/login")
}
