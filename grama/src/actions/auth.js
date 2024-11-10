import { NextApiRequest, NextApiResponse } from 'next';
import loginSchema from "@/lib/schemas/loginSchema"
export async function login(state, formData) {
  try {
    if (!formData.email || !formData.password) return
    const validatedField = await loginSchema.validate(formData)
    if (!validatedField) return
    console.log("VALIDAÇÕO DE DADOS SUCESSO")
  } catch (error) {
    return error
  }
  return
}
