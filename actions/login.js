'use server'
import { signIn } from '@/lib/auth'
import { getUserByEmail } from './fetchUser'
// import { db } from '@/db'
// import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { LoginSchema } from '@/schemas'
import { AuthError } from 'next-auth'
import { generateVerificationToken } from '@/lib/tokens'
import { sendVerificationEmail } from '@/lib/mail'
import { DEFAULT_LOGIN_REDIRECT } from '@/lib/routes'


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
