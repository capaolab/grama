import loginSchema from "@/lib/schemas/loginSchema"
async function auth(state, formData) {
  // if (!formData.email || !formData.password) {
  //   return state.errors.name = "Preencha todos os campos"
  // }
  // const validatedField = await loginSchema.validate(formData)
  // if (!validatedField) {
  //   return state.errors.name = "Preencha todos os campos"
  // }
  setTimeout(() => {
    console.log('loading')
  }, 3000)
  const email = formData.get('email')
  const password = formData.get('password')
  console.log(email, password)
  return 'LOGIN OK'
}

export default auth
