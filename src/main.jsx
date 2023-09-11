import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App.jsx'

import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './componentes/Home.jsx'
import Produtos from './componentes/Produtos.jsx'

const router= createBrowserRouter([
  
  {
    path: '/', element: <App/>, 

    children:[
      {path: '/', element: <Home/>},
      {path: '/Produtos', element: <Produtos/>}
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
