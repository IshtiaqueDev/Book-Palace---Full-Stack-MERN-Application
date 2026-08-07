import { useState } from 'react'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={ <HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
