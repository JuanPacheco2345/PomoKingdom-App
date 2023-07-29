import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { CharacterProvider } from './context/character_provider';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <CharacterProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/timer' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CharacterProvider>

  );
}

export default App;
