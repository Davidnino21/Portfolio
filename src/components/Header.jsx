import React from 'react'
import Navigation from './Navigation'

function Header() {
  return (
    <header id='header'>
      <div>
        {/* <img src="/mainLogo.svg" alt="" /> */}
        <h1>David Nino</h1>
      </div>
      <Navigation />
    </header>
  )
}

export default Header