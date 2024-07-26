import React from 'react'

const AuthLayout = ({ children }) => {
  return (
    <div className=" bg-slate-200 flex h-full min-h-screen flex-col items-center justify-center py-12">
      {children}
    </div>
  )
}

export default AuthLayout
