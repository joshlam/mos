import React from 'react'
import Logo from './assets/logo.svg'
import styles from './App.module.css'
import { Products } from './components/Products'
import { UserHeader } from './components/UserHeader'
import { PRODUCTS, FEATURED_PRODUCT, USER } from './mockData'

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <img src={Logo} className={styles.logo} alt="logo" />
    </header>
  )
}

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <UserHeader name={USER.name} />
      <Products products={PRODUCTS} featuredProduct={FEATURED_PRODUCT} />
    </div>
  )
}

export default App
