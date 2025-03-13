'use client'

import { Button } from '@/components/atoms/button'
import Field from '@/components/molecules/field'
import { Form, FormMessage } from '@/components/atoms/form'
import { toast } from '@/hooks/use-toast'
import { updatePassword } from '@/utils/actions/user'
import { zodUpdatePasswordSchema } from '@/utils/validations/user'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

function UpdatePasswordForm() {
  const form = useForm<z.infer<typeof zodUpdatePasswordSchema>>({
    resolver: zodResolver(zodUpdatePasswordSchema),
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
  })

  async function onSubmit(values: z.infer<typeof zodUpdatePasswordSchema>) {
    const response = await updatePassword(values)
    if (response?.data?.success) {
      toast({
        title: 'Succès',
        duration: 2000,
      })
      form.reset()
    } else if (response?.data?.failure) {
      toast({
        variant: 'destructive',
        title: 'Erreur de modification',
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
        className="space-y-8 w-[450px] flex flex-col items-end"
        noValidate
      >
        <Field
          form={form}
          name="currentPassword"
          label="Mot de passe actuel"
          type="password"
          required
        />

        <Field
          form={form}
          name="newPassword"
          label="Nouveau mot de passe"
          type="password"
          required
        />

        <Field
          form={form}
          name="confirmNewPassword"
          label="Confirmation du nouveau mot de passe"
          type="password"
          required
        />

        {form.formState.errors.root?.message && (
          <FormMessage>{form.formState.errors.root?.message}</FormMessage>
        )}

        <Button type="submit">Modifier</Button>
      </form>
    </Form>
  )
}

export default UpdatePasswordForm
