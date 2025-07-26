import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamDashboard from './components/TeamDashboard';
import Create from './components/Create';
import About from './components/About';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    <Routes>
    <Route path='/dashboard' element={<TeamDashboard />} />
    <Route path='/create' element={<Create />} />
    <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
    
  </StrictMode>,
)
