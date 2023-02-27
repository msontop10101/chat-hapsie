import React,{useState, useEffect} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import Edit from './pages/Edit';

function App() {
  const [logina, setLogina] = useState(false)

  useEffect(() => {
    let loginState = localStorage.getItem('logina')
    typeof loginState === 'string' ? setLogina(JSON.parse(loginState)) : setLogina(loginState)
    console.log(`GET: ${loginState}`)
  }, [logina])
  
  useEffect(() => {
    localStorage.setItem('logina', JSON.stringify(logina))
    console.log(typeof logina)
  },[logina])
  

  console.log(`Login State: ${typeof logina}`)

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
