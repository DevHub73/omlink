'use server'
import { signIn } from '@/lib/auth'
import { getUserByEmail } from './fetchUser'
import { LoginSchema } from '@/schemas'
import { AuthError } from 'next-auth'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'
import { DEFAULT_LOGIN_REDIRECT } from '@/lib/routes'
import { signOut } from '@/lib/auth'
import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import bcrypt from 'bcryptjs'

export const login = async (values) => {
  const validatedFields = LoginSchema.safeParse(values)
  if (!validatedFields.success) {
    return { error: 'Invalid form data' }
  }
  const { email, password } = validatedFields.data

  const exsitingUser = await getUserByEmail(email)

  if (!exsitingUser || !exsitingUser.email || !exsitingUser.password) {
    return { error: 'Invalid credentials!' }
  }

  if (!exsitingUser.emailVerified) {
    const verficationToken = await generateVerificationToken(email)

    // to do: send verification email
    await sendVerificationEmail(verficationToken.email, verficationToken.token)
    return { error: 'Email not verified! Confirmation mail resent again' }
  }


  try {

    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
    return { success: 'Login successful!' }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' }
        default:
          return { error: 'Something went wrong' }
      }
    }
    throw error
  }
}

export const logout = async () => {
  await signOut()
}

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
