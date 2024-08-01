'use client'
import { CheckCircledIcon } from '@radix-ui/react-icons'

export const FormSuccess = ({ message }) => {
  if (!message) return null
  return (
    <div className=" p-3 rounded-md flex items-center text-sm text-emerald-500 gap-x-2">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}
