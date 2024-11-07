import { NextApiRequest, NextApiResponse } from 'next';
import loginSchema from "@/lib/schemas/loginSchema"
export async function login(state, formData) {
    try {
        const validatedField = await loginSchema.validate(formData)
    } catch (error) {
        return re
    }
    return
}