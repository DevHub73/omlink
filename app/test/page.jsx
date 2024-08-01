// 'use client'

// import { useSession } from 'next-auth/react'
// import React from 'react'

// const TestPage = () => {
//   const { data: session, status } = useSession()
//   console.log(session)
//   return <div>TestPage</div>
// }

// export default TestPage

'use server'
import { fetchUser } from '@/actions/fetchUser'
const TestPage = async () => {
  const user = await fetchUser()
  console.log(user)
  return <div>TestPage</div>
}

export default TestPage
