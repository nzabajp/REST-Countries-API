import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './routes/HomePage'
import DetailsPage from './routes/DetailsPage'
import GlobalStyles from './components/GlobalStyles'

const App = () => {
  const [countries, setCountries] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  }

  useEffect(() => {
    const test = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(test)
  }, []);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,region,subregion,capital,tld,currencies,languages,borders,flags,population")
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <GlobalStyles darkMode={darkMode} />
      <Header
        darkMode={darkMode} 
        setDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/:country" element={<DetailsPage countries={countries} />} />
      </Routes>
    </div>
  )
}

export default App
