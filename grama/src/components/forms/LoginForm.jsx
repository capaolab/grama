'use client'

import { useActionState } from "react"
import ErrorMsg from '../errors/ErrorMsg'
import auth from '../../actions/auth'
import SubmitButton from "../buttons/SubmitButton"


function LoginForm() {
  const [message, action, isPending] = useActionState(auth, undefined)


  return (
    <form
      className="flex flex-col justify-center items-center"
      action={action}
    >
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
      <SubmitButton isPending={isPending} name="Login" />
      {isPending && <ErrorMsg message={message} />}
    </form>
  )
}

export default LoginForm
