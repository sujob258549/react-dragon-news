import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'
import FirebaseSetap from './Firebase/FirebaseSetap.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseSetap>
      <RouterProvider router={router}></RouterProvider>
    </FirebaseSetap>
  </React.StrictMode>,
)
