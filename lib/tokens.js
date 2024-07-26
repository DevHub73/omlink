import { v4 as uuid } from 'uuid'
import { db } from '@/lib/db'
import { getVerificationTokenByEmail } from '@/actions/verification-token'

export const generateVerificationToken = async (email) => {
  const token = uuid()
  const expires = new Date(new Date().getTime() + 1000 * 60 * 60) // 1 hour

  const exsitingToken = await getVerificationTokenByEmail(email)
  if (exsitingToken) {
    await db.verificationToken.delete({
      where: {
        id: exsitingToken.id,
      },
    })
  }
  const verficationToken = await db.verificationToken.create({
    data: {
      token,
      email,
      expires,
    },
  })

  return verficationToken
}

