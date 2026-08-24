import { useState , lazy , Suspense } from 'react'
import {Route , Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Loader from './components/Loader';
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './utils/ProtectedRoute';
import { ToastContainer , Bounce } from 'react-toastify';
const HomePage = lazy(() => import("./Pages/HomePage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const BookForm = lazy(() => import("./Pages/BookForm"));
const BookInfo = lazy(() => import("./Pages/BookInfo"));
const EditPage = lazy(() => import("./Pages/EditPage"));
const ErrorPage = lazy(() => import("./Pages/ErrorPage"));


function App() {

  return (
    <>
    <div className="min-vh-100 d-flex flex-column">
    <Navbar/>
    <main className="flex-grow-1">
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/books' element={ 
        <HomePage/>    }></Route>
      <Route path='/books/add' element={
        <ProtectedRoute>
          <BookForm/>
        </ProtectedRoute>
        }></Route>
      <Route path='/user/login' element={<LoginPage/>}></Route>
      <Route path='/user/signup' element={<SignUp/>}></Route>
      <Route path='/books/:id' element={<BookInfo/>}></Route>
      <Route path='books/edit/:id' element={
        <ProtectedRoute>
          <EditPage/>
        </ProtectedRoute>
      }></Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
  </Suspense>
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
