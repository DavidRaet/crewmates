import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import TeamDashboard from './components/TeamDashboard';
import Create from './components/Create';
import About from './components/About';


function App() {
  const TEAMS = {
    'Bastard Munchen': {
    colors: ['maroon', 'gold'],
    theme: 'ruthless'
    },
    'PxG': {
      colors: ['blue', 'white'],
      theme: 'aggressive'
    },
    'FC Barcha': {
      colors: ['red', 'black'],
      theme: 'creativity'
    },
    'Ubers': {
      colors: ['black', 'white'],
      theme: 'meticulousness'      
    },
    'Manshine City': {
      colors: ['sky blue', 'white'],
      theme: 'athleticism'          
    }
  }

  const [count, setCount] = useState(0)

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
    </div>
  )
}

export default App
