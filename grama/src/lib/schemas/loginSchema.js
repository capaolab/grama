<<<<<<< Updated upstream
=======
import menssages from '../configs/messages.json'
>>>>>>> Stashed changes
import * as yup from 'yup'

let loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

export default loginSchema