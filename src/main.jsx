import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import PropertyForm from './components/PropertyForm'
import PropertyList from './components/PropertyList.jsx'
import PropertyDetails from './components/PropertyDetails.jsx'
import SellerDetails from './components/SellerDetails.jsx'
import PropertiesBySeller from './components/PropertiesBySeller.jsx'
import UpdateProperty from './components/UpdateProperty.jsx'
import DeleteProperty from './components/DeleteProperty.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/signin', element: <SignIn /> },
  { path: '/signup', element: <SignUp /> },
  { path: '/property', element: <PropertyForm /> },
  { path: '/properties', element: <PropertyList /> },
  { path: '/property/:id', element: <PropertyDetails /> },
  { path: '/seller/:id', element: <SellerDetails /> },
  { path: '/seller/:id/properties', element: <PropertiesBySeller /> },
  { path: '/property/:id/update', element: <UpdateProperty /> },
  { path: '/property/:id/delete', element: <DeleteProperty /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
