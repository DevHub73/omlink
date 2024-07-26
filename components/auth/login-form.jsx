'use client'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { CardWrapper } from './card-wrapper'
import { z } from 'zod'
import { LoginSchema } from '@/schemas'
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import { useState, useTransition } from 'react'
import Link from 'next/link'
import { FormError } from './form-error'
import { login } from '@/actions/login'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSuccess } from './form-success'

export const LoginForm = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isPending, startTransition] = useTransition()

  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data) => {
    setError('')
    setSuccess('')
    startTransition(async () => {
      const res = await login(data)
      if (res?.error) setError(res?.error)
      if (res?.success) setSuccess(res?.success)
    })
  }

  return (
    <CardWrapper
      header="Welcome back!"
      backBtnLabel="Don't have an account? Sign up"
      backBtnHref="/auth/register">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input disabled={isPending} {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Link
              className={buttonVariants({
                variant: 'link',
                size: 'sm',
                className: 'text-zinc-500 hover:text-primary py-0',
              })}
              href="/auth/reset">
              Forgot password?
            </Link>

            {/* <FormError message={urlError} /> */}
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              className="w-full bg-primary">
              Login
            </Button>
          </div>
        </form>
      </Form>
    </CardWrapper>
  )
}
