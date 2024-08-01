import { db } from '@/lib/db'

export const switchUserMode = async (id) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  })
  if (!user) {
    return { error: 'User not found!' }
  }
  const updatedUser = await db.user.update({
    where: {
      id,
    },
    data: {
      mode: user.mode === 'INDIVIDUAL' ? 'LEVERAGE' : 'INDIVIDUAL',
    },
  })
  return { success: 'User mode updated!', user: updatedUser }
}

