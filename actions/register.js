'use server'
import { getUserByEmail } from './fetchUser'
import { db } from '@/lib/db'
import { sendVerificationEmail } from '@/lib/mail'
import { generateVerificationToken } from '@/lib/tokens'
import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcryptjs'


export const register = async (values) => {
  const validatedFileds = RegisterSchema.safeParse(values)
  if (!validatedFileds.success) {
    return { error: 'Invalid form data' }
  }

  const { username, email, password } = validatedFileds.data
  const hashedPassword = await bcrypt.hash(password, 10)
  const exsitingUset = await getUserByEmail(email)
  if (exsitingUset) {
    return { error: 'User already exists' }
  }
  await db.user.create({
    data: {
      name: username,
      email,
      password: hashedPassword,
    },
  })
  const verficationToken = await generateVerificationToken(email)
  console.log('verficationToken', verficationToken)
  //send verification email
  await sendVerificationEmail(verficationToken.email, verficationToken.token)

  return { success: 'Confirmation Email sent!' }
}
