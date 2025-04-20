import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import './App.css'
import { Navbar } from './Components/navbar/Navbar'

import { AuthProvider } from './context/authContext'
import { ProtectedRoute } from './Components/ProtectedRoute'
import { ProtectedComponent } from './Components/ProtectedComponent'

import { Sidebar } from './Components/sidebar/Sidebar'
import { Sidebox } from './Components/sidebar/Sidebox'
import { useState } from 'react'

function App() {

  const [sideExpand, setSideExpand] = useState(true)


  return (
    <div className=" h-screen justify-center flex ">
      <AuthProvider>
        <ProtectedComponent>
          <div className='border-r-1 border-gray-200'>
            {sideExpand ? (<Sidebar />) : (<Sidebox />)}
          </div>
        </ProtectedComponent>
        <div className='w-full'>
          <Navbar />

          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </div>

      </AuthProvider>
    </div>
  )
}
export default App
