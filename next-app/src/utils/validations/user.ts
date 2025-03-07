import { z } from "zod";

export const zodUpdatePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(4, "Le mot de passe actuel doit contenir au moins 4 caractères"),
    newPassword: z
      .string()
      .min(4, "Le nouveau mot de passe doit contenir au moins 4 caractères")
      .regex(/[A-Z]/, "Le mot de passe doit contenir au moins une majuscule")
      .regex(/[a-z]/, "Le mot de passe doit contenir au moins une minuscule")
      .regex(/[0-9]/, "Le mot de passe doit contenir au moins un chiffre")
      .regex(
        /[\W_]/,
        "Le mot de passe doit contenir au moins un caractère spécial"
      ),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Les nouveaux mots de passe ne correspondent pas",
    path: ["confirmNewPassword"],
  });
