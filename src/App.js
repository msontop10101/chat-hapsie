import React,{useState} from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import Edit from './pages/Edit';

function App() {
  const getLoginState = (loginState) => {
    setLoginState(loginState)
  }
  const [loginState, setLoginState] = useState(false)
  console.log(loginState)
  return (
    <>
      <Routes>
        <Route path='/' element={<Chat />}></Route>
        <Route path='/admin' element={<Admin getLoginState={getLoginState}/>}></Route>
        <Route path='/edit' element={<Edit loginState={loginState}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
