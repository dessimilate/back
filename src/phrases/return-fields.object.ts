import { Prisma } from '@prisma/client'

export const returnPhrasesObject: Prisma.PhrasesSelect = {
  id: true,
  text: true
}