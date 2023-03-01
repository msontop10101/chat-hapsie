import React,{useState} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import Edit from './pages/Edit';

function App() {
  const [logina, setLogina] = useState(false)

  return (
    <>
      <Routes>
        <Route path='/' element={<Chat />}></Route>
        <Route path='/admin' element={<Admin logina={logina} setLogina={setLogina}/>}></Route>
        <Route path='/edit' element={<Edit logina={logina} setLogina={setLogina}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
