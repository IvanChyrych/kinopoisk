import { useState } from 'react'
import { Header } from '../../src/components/header/index'
import { Title } from '../components/title/index'
import { text } from '../config/text/index'
import { Counter } from '../components/counter/Counter'

export function Main () {
  const [lang, setLang] = useState('en')

  function handleChangeLang (event) {
    setLang(event.target.value)
  }
  return (
    <>
      <div className="d-flex  w-100 justify-content-center">
        <div className="d-block">
          <Title title={text[lang].main.title} />
          <div className="d-flex  w-100 justify-content-center" >
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos at iure eligendi officiis! Sed autem velit debitis numquam praesentium.</p>
          </div>
        </div>
      </div>
    </>
  )
}
