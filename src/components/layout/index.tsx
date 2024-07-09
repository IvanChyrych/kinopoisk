import { Header } from '../header'
import { Main } from '../main'
import { Footer } from '../footer'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}
