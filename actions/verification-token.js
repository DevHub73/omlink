import { db } from "@/lib/db"


export const getVerificationTokenByToken = async (token) => {
  try {
    const verfiedToken = await db.verificationToken.findUnique({
      where: {
        token,
      },
    })

    return verfiedToken
  } catch (err) {
    console.error(err)
    return null
  }
}

export const getVerificationTokenByEmail = async (email) => {
  try {
    const verfiedToken = await db.verificationToken.findFirst({
      where: {
        email,
      },
    })
    return verfiedToken
  } catch (err) {
    console.error(err)
    return null
  }
}
