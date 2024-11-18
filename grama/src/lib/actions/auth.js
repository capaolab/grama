"use server"

import loginSchema from "@/lib/schemas/loginSchema"
import prisma from "@/database/prisma"

async function auth(prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    //TODO: Aplicar Toastfy para exibir o erro
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return { res }
  }

  try {
    await loginSchema.validate(formData, { abortEarly: false })
  } catch (error) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return "Email ou senha inválidos"
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return "User not found"
  }

  return 'Success'
}

export default auth
