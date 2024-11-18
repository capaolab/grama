import 'server-only'
import { SignJWT, jwtVerify } from 'jose'

import cookies from 'next/headers'
import prisma from '../../database/prisma'


//TEST check if expires works passing diferent days or strings
const expiresInDays = parseInt(process.env.SESSION_EXPIRES_IN_DAYS)
const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${expiresInDays}d`)
    .sign(encodedKey)
}

export async function decrypt(session) {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ['HS256'],
    })
    return payload
  } catch (error) {
    console.log('Failed to verify session')
  }
}

export async function createSession(id) {
  //TEST check if expiresAt is working by the days passed in expiresInDays
  const expiresAt = new Date(Date.now() + expiresInDays * 24 * 60 * 60 * 1000)

  const session = await prisma.session.create({
    data: {
      userId: id,
      expiresAt,
    },
  })

  const sessionId = session.id

  const encryptedSession = await encrypt({ sessionId, expiresAt })

  const cookieStore = await cookies()
  cookieStore.set('session', encryptedSession, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}
