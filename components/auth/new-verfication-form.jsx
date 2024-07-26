'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { CardWrapper } from './card-wrapper'
import { BeatLoader } from 'react-spinners'

import { newVerification } from '@/actions/new-verification'
import { FormError } from './form-error'
import { FormSuccess } from './form-success'

export const NewVerificationForm = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  console.log('token: ', token)

  const onSubmit = useCallback(() => {
    if (success || error) return
    if (!token) {
      setError('Missing token!')
      return
    }
    newVerification(token)
      .then((data) => {
        setError(data.error)
        setSuccess(data.success)
      })
      .catch(() => {
        setError('Something went wrong!')
      })
  }, [token, error, success])

  useEffect(() => {
    onSubmit()
  }, [onSubmit])

  return (
    <CardWrapper
      header="Confirm your email!"
      backBtnLabel="Back to login"
      backBtnHref="/auth/login">
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {error && <FormError message={error} />}
      </div>
    </CardWrapper>
  )
}
