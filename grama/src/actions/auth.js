"use server"

import loginSchema from "@/lib/schemas/loginSchema"


async function auth(prevState, formData) {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email || !password) {
    //TODO: Aplicar Toastfy para exibir o erro
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return "Preencha todos os campos"
  }
  // const validatedField = await loginSchema.validate(formData)
  // if (!validatedField) {
  //   return state.errors.name = "Preencha todos os campos"
  // }

  console.log(email, password)
  return 'LOGIN OK'
}

export default auth
