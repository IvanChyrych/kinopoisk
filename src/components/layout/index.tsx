import React, { useState } from 'react'
import { Header } from '../header'
import { Main } from '../main'
import { Title } from '../title'
import { Footer } from '../footer'
import { Outlet } from 'react-router-dom'

export function Layout () {
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
