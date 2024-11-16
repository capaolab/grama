'user client'
function ErrorMsg({ message, reset }) {
  return (
    <p className="py-2 text-red-500 font-mono font-medium text-sm">
      {message}
    </p>
  )
}

export default ErrorMsg;
