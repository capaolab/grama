import menssages from '../../config/messages.json'
import * as yup from 'yup'

let loginSchema = yup.object().shape({
  email: yup.string().email(menssages.validation.email.error).required(menssages.validation.email.required),
  password: yup.string(menssages.validation.password.error).required(menssages.validation.password.required)
})

export default loginSchema
