import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Portfolio from '../src/components/portfolio/Portfolio.jsx'
import ContactMe from '../src/components/contactme/contactme.jsx'
import ErrorPage from '../src/components/ErrorPage/ErrorPage.jsx'
import HomePage from '../src/components/HomePage/HomePage.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index:true,
                element: <HomePage />
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
            },
            {
                path: '/ContactMe',
                element: <ContactMe />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
    
  
)
