import { z } from "zod"

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  type: z.string(),
  origin: z.object({
    name: z.string(),
    url: z.string(),
  }),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
  image: z.string(),
  episode: z.array(z.string()),
  url: z.string(),
  created: z.string(),
})

export type Character = z.infer<typeof CharacterSchema>

export const CharacterResponseSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string().nullable(),
    prev: z.string().nullable(),
  }),
  results: z.array(CharacterSchema),
})

export type CharacterResponse = z.infer<typeof CharacterResponseSchema>

export const CharacterArraySchema = z.array(CharacterSchema)
