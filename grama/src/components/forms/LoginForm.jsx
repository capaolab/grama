'use client'

import { useTransition, useState } from "react"
import { redirect } from "next/dist/server/api-utils"
import { ErrorMsg } from '../errors/ErrorMsg'
function LoginForm() {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(null)
  const [isPending, startTransition] = useTransition()

  const handleSubmit = (e) => {
    e.preventDefault()
    startTransition(async () => {
      const error = await login(email, password)
      if (error) {
        setError(error);
        return;
      }
      redirect('/');
      console.log(email, password)
    })
  }
  return (
    <form className="flex flex-col justify-center items-center">
      {error && <ErrorMsg error={error} reset={() => setError(null)} />}
      <fieldset className="input-text">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={formData.email}
        />
      </fieldset>
      <fieldset className="input-text">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={formData.password}
        />
      </fieldset>
      <button
        className="btn-primary"
        type="submit"
        onClick={handleSubmit}
        disabled={isPending}
      >
        Sign In
      </button>
    </form>
  )
}

export default LoginForm
