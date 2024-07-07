import { text } from '../config/text/index'
import { Title } from '../components/title/index'
import { useSelector } from 'react-redux'
import { SignInForm } from '../components/signInForm'

export function SignIn () {
  const lang = useSelector(state => state.lang.value)

  return (
    <>
      <div className="d-flex flex-column">
        <Title>{text[lang]?.signIn.title}</Title>
        <SignInForm />
      </div>
    </>
  )
}
