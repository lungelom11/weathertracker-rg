import React from 'react'
import Logo from "../assets/weather-logo.png"

const Header = () => {
  return (
    <>
      <div className="header-content">
        <h1>Weather Tracker</h1>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </>
  )
}

export default Header