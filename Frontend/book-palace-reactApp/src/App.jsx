import { useState } from 'react'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from "./Pages/HomePage";
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import Footer from './components/Footer';
import AddBook from './Pages/AddBook';
import ErrorPage from './Pages/ErrorPage';
import BookInfo from "./Pages/BookInfo"

function App() {

  return (
    <>
    <div className="min-vh-100 d-flex flex-column">
    <Navbar/>
    <main className="flex-grow-1">
    <Routes>
      <Route path='/books' element={ <HomePage/>}></Route>
      <Route path='/books/add' element={<AddBook/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/books/:id' element={<BookInfo/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default App
