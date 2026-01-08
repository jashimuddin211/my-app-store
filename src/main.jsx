import { Component, lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ErrorApp from './pages/ErrorApp.jsx'
const Root = lazy(() => import("./pages/Root.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const Apps = lazy(() => import("./pages/Apps.jsx"));
const Installation = lazy(() => import("./pages/Installation.jsx"));
const AppDetails = lazy(() => import("./pages/AppDetails.jsx"));
const ErrorPage = lazy(() => import("./pages/ErrorPage.jsx"));

const loader = (
  <div className="flex justify-center items-center min-h-screen">
    <span className="loading loading-bars loading-xl"></span>
  </div>
);




const router = createBrowserRouter([
  {
    path:"/",
    element:(
      <Suspense fallback={loader}>
        <Root/>
      </Suspense>
    ),
    errorElement:<ErrorPage></ErrorPage>,
    
    
    children:[
      {index:true,
      path:'/',
      element:(
        <Suspense fallback={loader}>
          <Home/>
        </Suspense>
      ),
      
      
      },
 {
        path: "apps",
        element: (
          <Suspense fallback={loader}>
            <Apps />
          </Suspense>
        ),
      },
  {
        path: "installation",
        element: (
          <Suspense fallback={loader}>
            <Installation />
          </Suspense>
        ),
      },
 {
        path: "appDetails/:id",
        element: (
          <Suspense fallback={loader}>
            <AppDetails />
          </Suspense>
        ),
        errorElement:<ErrorApp/>,
      },


    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
