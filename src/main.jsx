import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './pages/components/Header'
import { Home } from './pages/Home'
import "./index.css"
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { GlobalProvider } from './context/GlobalContext'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/cadastro",
        element: <Cadastro/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <RouterProvider router={rotas}/>
  </GlobalProvider>,
)
