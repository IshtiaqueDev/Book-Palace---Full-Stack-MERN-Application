import { useState , lazy , Suspense } from 'react'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';
import Footer from './components/Footer';
import AddBook from './Pages/AddBook';
import ErrorPage from './Pages/ErrorPage';
import BookInfo from "./Pages/BookInfo"
import { ToastContainer, toast,Bounce } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './utils/ProtectedRoute';
const HomePage=lazy(()=>import("./Pages/HomePage"))
import Loader from './components/Loader';

function App() {

  return (
    <>
    <div className="min-vh-100 d-flex flex-column">
    <Navbar/>
    <main className="flex-grow-1">
    <Routes>
      <Route path='/books' element={ 
        <Suspense fallback={<Loader/>}>
        <HomePage/>
        </Suspense>
        }></Route>
      <Route path='/books/add' element={
        <ProtectedRoute>
          <AddBook/>
        </ProtectedRoute>
        }></Route>
      <Route path='/user/login' element={<LoginPage/>}></Route>
      <Route path='/user/signup' element={<SignUp/>}></Route>
      <Route path='/books/:id' element={<BookInfo/>}></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </main>
    <Footer/>
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
    </>
  )
}

export default App
