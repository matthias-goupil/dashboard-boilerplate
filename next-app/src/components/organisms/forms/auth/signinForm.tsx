'use client'

import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/atoms/button'
import { Form, FormMessage } from '@/components/atoms/form'
import { redirect } from 'next/navigation'
import { toast } from '@/hooks/use-toast'
import Field from '@/components/molecules/field'
import { signin } from '@/utils/actions/auth'
import { zodSigninSchema } from '@/utils/validations/auth'

function SigninForm() {
  const form = useForm<z.infer<typeof zodSigninSchema>>({
    resolver: zodResolver(zodSigninSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof zodSigninSchema>) {
    const response = await signin(values)
    if (response?.data?.success) {
      redirect('/dashboard')
    } else if (response?.data?.failure) {
      toast({
        variant: 'destructive',
        title: 'Erreur de connexion',
        description: response.data.failure,
        duration: 2000,
      })
      form.setError('root', { message: response.data.failure })
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        noValidate
      >
        <Field
          form={form}
          name="email"
          label="Adresse email"
          placeholder="example@gmail.com"
          type="email"
          displayRequiredLabel={false}
          required
        />

        <Field
          form={form}
          name="password"
          label="Mot de passe"
          placeholder="Mot de passe"
          type="password"
        />

        {form.formState.errors.root?.message && (
          <FormMessage>{form.formState.errors.root?.message}</FormMessage>
        )}

        <Button variant="form" type="submit">
          Se connecter
        </Button>
      </form>
    </Form>
  )
}

export default SigninForm
