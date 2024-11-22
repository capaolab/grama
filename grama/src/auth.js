import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import loginSchema from "./lib/schemas/loginSchema"
import prisma from "./lib/database/prisma"

import { comparePassword } from "./lib/helpers/pwHash"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null

          // 1. Schema validation
          await loginSchema.validate(formData, { abortEarly: false })

          // 2. Find user in database
          user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            },
            select: {
              email: true,
              password: true
            }
          })
          const isValid = await comparePassword(credentials.password, user.password)

          // 3. Check if user exists and password is valid
          if (!user || !isValid) {
            throw new Error("Invalid credentials.")
          }

          return user
        } catch (error) {
          if (error instanceof ValidationError) {
            return null
          }
        }
      },
    }),
  ],
})
