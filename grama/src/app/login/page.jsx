import React from 'react'
import LoginForm from '../../components/forms/LoginForm'

function page() {
    return (
        <main className='pagination'>
            <section className='w-60 h-60 flex justify-center items-center'>
                <LoginForm />
            </section>
        </main>
    )
}

export default page