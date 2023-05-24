import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import HomeComp from './components/HomeComp/HomeComp'
import ExpensesComp from './components/ExpensesComp/ExpensesComp'

import './index.css'
import './font.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const BrowserRouter = createBrowserRouter([
    {
        path: '/home',
        element: <HomeComp />,
    },
    {
        path: '/expenses',
        element: <ExpensesComp />,
    },
    {
        path: '*',
        element: <Navigate to="/home" />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={BrowserRouter} />
    </React.StrictMode>
)

reportWebVitals()
