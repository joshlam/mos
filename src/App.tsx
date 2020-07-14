import React from 'react'
import Logo from './assets/logo.svg'
import './App.css'
import { Products } from './components/Products'
import { UserHeader } from './components/UserHeader'
import { PRODUCTS, FEATURED_PRODUCT, USER } from './mockData'

const AppHeader = () => {
  return (
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="logo" />
    </header>
  )
}

const App: React.FC = () => {
  return (
    <div className="App">
      <AppHeader />
      <UserHeader name={USER.name} />
      <Products products={PRODUCTS} featuredProduct={FEATURED_PRODUCT} />
    </div>
  )
}

export default App
