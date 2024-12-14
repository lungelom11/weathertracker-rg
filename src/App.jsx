import React from 'react'
import Header from './components/Header'
import InputText from './components/InputText'
import CityReport from "./components/CityReport"
import "./style.css"

const App = () => {
  return (
    <div className="container">
        <div className="header-container">
            <Header />
        </div>
        <div className="main-container">
            <CityReport />
            <InputText/>
        </div>
    </div>
  )
}

export default App