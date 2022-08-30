import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './routes/HomePage'
import DetailsPage from './routes/DetailsPage'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,region,subregion,capital,tld,currencies,languages,borders,flags,population")
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/country" element={<DetailsPage />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  )
}

export default App
