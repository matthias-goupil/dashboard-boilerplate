"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormMessage } from "@/components/ui/form";
import { signup } from "@/actions/auth";
import { redirect } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import Field from "@/components/ui/field";
import { zodSignupSchema } from "@/zod/auth";

function SigninForm() {
  const form = useForm<z.infer<typeof zodSignupSchema>>({
    resolver: zodResolver(zodSignupSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof zodSignupSchema>) {
    const response = await signup(values);
    if (response?.data?.success) {
      toast({
        title: "Inscription réussie",
        description: "Veuillez vous connecter",
        duration: 2000,
      });
      redirect("/auth/signin");
    } else if (response?.data?.failure) {
      toast({
        variant: "destructive",
        title: "Erreur de connexion",
        description: response.data.failure,
        duration: 2000,
      });
      form.setError("root", { message: response.data.failure });
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
          name="name"
          label="Nom d'utilisateur"
          placeholder="Nom d'utilisateur"
          type="text"
          required
        />

        <Field
          form={form}
          name="email"
          label="Adresse email"
          placeholder="example@gmail.com"
          type="email"
          required
        />

        <Field
          form={form}
          name="password"
          label="Mot de passe"
          placeholder="Mot de passe"
          type="password"
          required
        />

        {form.formState.errors.root?.message && (
          <FormMessage>{form.formState.errors.root?.message}</FormMessage>
        )}

        <Button variant="form" type="submit">S'inscrire</Button>
      </form>
    </Form>
  );
}

export default SigninForm;
