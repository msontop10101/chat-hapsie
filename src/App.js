import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/Chat';
import Admin from './pages/Admin';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Chat />}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </>
  );
}

export default App;
