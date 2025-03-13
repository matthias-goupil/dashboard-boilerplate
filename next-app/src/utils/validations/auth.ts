import { z } from 'zod'

export const zodSigninSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

export const zodSignupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string(),
})
