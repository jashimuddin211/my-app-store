import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root.jsx'
import Home from './pages/Home.jsx'
import Apps from './pages/Apps.jsx'
import Installation from './pages/Installation.jsx'
import AppDetails from './pages/AppDetails.jsx'
import ErrorPage from './pages/ErrorPage.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    
    
    children:[
      {index:true,
      path:'/',
      Component:Home,
      
      
      },
{
  path:'apps',
  Component:Apps,
},
{
  path:'installation',
  Component: Installation
},
 {
  path: '/appDetails/:id',
  Component:AppDetails,
},


    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
