"use server"
import { Session } from "next-auth"
import { getSession } from "next-auth/react"

export async function checkSession(): Promise<Session | null> {
  const session = await getSession()
  return session ? session : null
}
