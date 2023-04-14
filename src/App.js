import {useState} from 'react'
import './App.css';
import Home from './components/Home';
import Menu from './components/Menu'
import Navbar from './components/Navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Home isDarkMode={isDarkMode}/>
      <Menu isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
