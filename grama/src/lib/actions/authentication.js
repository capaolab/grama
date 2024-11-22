"use server"

import { signIn } from "@/auth"


async function authentication(prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  await signIn('credentials', { email, password })

  return null
}

export default authentication
