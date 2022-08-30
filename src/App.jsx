import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './routes/HomePage'
import DetailsPage from './routes/DetailsPage'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country" element={<DetailsPage />} />
      </Routes>
      <h1>Footer</h1>
    </div>
  )
}

export default App
