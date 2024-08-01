'use client'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const FormError = ({ message }) => {
  if (!message) return null
  return (
    <div className=" bg-red/15 p-3 rounded-md flex items-center text-sm text-red gap-x-2">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}
