'use client'

import { useActionState } from "react"
import { redirect } from "next/dist/server/api-utils"
import ErrorMsg from '../errors/ErrorMsg'
import auth from '../../actions/auth'

function LoginForm() {
  const [message, action, isPending] = useActionState(auth, undefined)

  return (
    <form
      className="flex flex-col justify-center items-center"
      action={action}
    >
      {message && <ErrorMsg error={message} />}
      <fieldset className="input-text">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
        />
      </fieldset>
      <fieldset className="input-text">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </fieldset>
      <button
        className="btn-primary"
        type="submit"
        disabled={isPending}
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
