import './App.css'
import TeamDashboard from './components/TeamDashboard';
import Create from './components/Create';
import About from './components/About';
import Home from './components/Home';
import { Routes, Route, Link } from 'react-router-dom';


function App() {



  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Team Dashboard</Link></li>
          <li><Link to='/create'>Create</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={<TeamDashboard />} />
    <Route path='/create' element={<Create />} />
    <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
