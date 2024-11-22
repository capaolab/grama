'use client'

<<<<<<< Updated upstream
import { useTransition, useState } from "react"
import { redirect } from "next/dist/server/api-utils"
function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isPending, startTransition] = useTransition()
=======
import { useActionState } from "react"
import ErrorMsg from '../errors/ErrorMsg'
import authentication from '../../lib/actions/authentication'
import SubmitButton from "../buttons/SubmitButton"


function LoginForm() {
  const [state, action, isPending] = useActionState(authentication, undefined)
>>>>>>> Stashed changes

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
            {error && <p>{error}</p>}
            <fieldset className="input-text">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                    value={password}
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