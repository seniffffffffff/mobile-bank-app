import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
} from 'react-router-dom'

import HomeComp from './components/HomeComp/HomeComp'
import ExpensesComp from './components/ExpensesComp/ExpensesComp'

import './index.css'
import './font.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const DefaultRedirect = () => {
    const navigate = useNavigate()
    navigate('/home')
    return null
}

const BrowserRouter = createBrowserRouter([
    {
        path: '/home',
        element: <HomeComp />,
    },
    {
        path: '/Expenses',
        element: <ExpensesComp />,
    },
    {
        path: '*',
        element: <DefaultRedirect />,
    },
])

root.render(
    <React.StrictMode>
        <RouterProvider router={BrowserRouter} />
    </React.StrictMode>
)

reportWebVitals()
