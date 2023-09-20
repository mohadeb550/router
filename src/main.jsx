import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import './index.css'
import HomeGalllery from './components/HomeGalllery'


import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {path: '/', element: <Home/>, children:[

    {path:'/', element: <HomeGalllery/> },
    {path:'/products', element: <HomeGalllery/> },
    {path:'/dashboard', element: <HomeGalllery/> },
  ]}
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
