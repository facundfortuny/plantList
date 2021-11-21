import React from 'react'
import logo from '../assets/logos/AnjiLogo-colour.png'

export default function Header() {
  return (
    <header className="w-full flex flex-row items-center justify-between p-4 header-container">
      <img className="w-10 md:w-14" src={logo} alt="logo" />
    </header>
  )
}
