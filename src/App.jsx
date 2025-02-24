import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Saludo from './components/saludo'
import Header from './components/header'
import TrendingSalad from './components/TrendingSalad'

function App() {
  return (
    <>
      <Header />
      <TrendingSalad />
    </>
  )
}

export default App