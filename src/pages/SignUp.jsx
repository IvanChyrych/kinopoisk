import { text } from '../config/text/index'
import { Title } from '../components/title/index'
import { useSelector } from 'react-redux'
import { SignUpForm } from '../components/signUpForm'

export function SignUp () {
  const lang = useSelector(state => state.lang.value)

  return (
    <>
      <div className="d-flex flex-column">
        <Title>{text[lang].signUp.title}</Title>
        <SignUpForm />
      </div>
    </>
  )
}
