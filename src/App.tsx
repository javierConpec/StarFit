import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
