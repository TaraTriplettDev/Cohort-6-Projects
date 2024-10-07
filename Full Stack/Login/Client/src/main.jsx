import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Login from "./Components/Login/Login.jsx"

import Landing from "./Components/Landing/Landing.jsx"

import { MyProvider } from "./hooks/context-hook.jsx"

createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <MyProvider>

        <Routes>

          {/* <App /> */}

          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />

          <Route element={<ProtectedRoutes />} />
          
          <Route path="/landing" element={<Landing />} />

        </Routes>

      </MyProvider>

    </BrowserRouter>

    <App />
</React.StrictMode>,
)
