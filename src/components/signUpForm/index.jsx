import { useState, useEffect, useRef, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { text } from '../../config/text/index'
import { fetchSignUp } from '../../redux/auth-slice'

export function SignUpForm () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const lang = useSelector(state => state.lang.value)
  const dispatch = useDispatch()

  function resetForm () {
    setUsername('')
    setEmail('')
    setPassword('')
  }

  function handleChangeUser (event) {
    setUsername(event.target.value)
  }

  function handleChangeEmail (event) {
    setEmail(event.target.value)
  }

  function handleChangePassword (event) {
    setPassword(event.target.value)
  }

  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('Пароли не совпадают. Попробуйте еще раз.')
      return
    }

    const userData = { username, email, password, course_group: 8 }

    dispatch(fetchSignUp(userData))
    resetForm()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">{text[lang]?.signUp.form.name}</label>
        <input
          onChange={handleChangeUser}
          value={username}
          type="text"
          className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">{text[lang]?.signUp.form.email}</label>
        <input
          onChange={handleChangeEmail}
          value={email}
          type="email"
          className="form-control" />
      </div>
      <div className="mb-3">
        <label className="form-label">{text[lang]?.signUp.form.password}</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChangePassword}
          value={password} />
      </div>
      <div className="mb-3">
        <label className="form-label">{text[lang]?.signUp.form.password}</label>
        <input
          type="password"
          className="form-control"
          onChange={handleChangeConfirmPassword}
          value={confirmPassword} />
      </div>
      <button className="btn btn-primary" type="submit">{text[lang]?.signUp.form.submit}</button>
    </form>
  )
}
