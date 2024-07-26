'use server'
import { db } from '@/lib/db'
import { getUserByEmail } from './fetchUser'
import { getVerificationTokenByToken } from './verification-token'

export const newVerification = async (token) => {
  const exsitingToken = await getVerificationTokenByToken(token)
  // console.log('exsitingToken: ', exsitingToken)
  if (!exsitingToken) {
    return { error: 'Token dose not exsit!' }
  }
  const isExpired = new Date(exsitingToken.expires) < new Date()
  if (isExpired) {
    return { error: 'Token has expired!' }
  }
  const exsitingUser = await getUserByEmail(exsitingToken.email)
  // console.log('exsitingUser: ', exsitingUser)
  if (!exsitingUser) {
    return { error: 'Email dose not exsit!' }
  }
  await db.user.update({
    where: { email: exsitingToken.email },
    data: { emailVerified: new Date() },
  })
  return { success: 'Email verified!' }
}
