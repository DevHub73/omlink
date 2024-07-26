// @ts-check
import { PrismaClient } from '@prisma/client'

/**
 * @type {PrismaClient | undefined}
 */
var cachedPrisma

/**
 * @type {PrismaClient}
 */
let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma