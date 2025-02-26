import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Saludo from './components/saludo'
import Header from './components/header'
import TrendingCarousel from './components/TrendingCarousel'

function App() {
  return (
    <div>
      <Header />
      <TrendingCarousel />
    </div>
  );
}

export default App;
