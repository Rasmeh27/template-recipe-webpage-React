import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Saludo from './components/saludo'
import Header from './components/header'
import TrendingCarousel from './components/TrendingCarousel'
import MenuList from './components/menuList'
import CardsFood from './components/cardsFood'

function App() {
  return (
    <div>
      <Header />
      <TrendingCarousel />
      <MenuList />
      <CardsFood />
    </div>
  );
}

export default App;
