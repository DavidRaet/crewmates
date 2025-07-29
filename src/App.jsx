import './App.css'
import TeamDashboard from './components/TeamDashboard';
import CreateCard from './components/CreateCard';
import About from './components/About';
import Home from './components/Home';
import EditCard from './components/EditCard';
import { Routes, Route, Link } from 'react-router-dom';


function App() {



  return (
    <div className="App">
      <nav>
        <ul className='nav-sidebar'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/dashboard'>Team Dashboard</Link></li>
          <li><Link to='/create'>Create</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <main className='main-content'> 
        <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={<TeamDashboard />} />
    <Route path='/create' element={<CreateCard />} />
    <Route path='/about' element={<About />} />
    <Route path='/edit/:id' element={<EditCard />} ></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
