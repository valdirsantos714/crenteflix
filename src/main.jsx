import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import "./index.css"
import { Login } from './pages/Login'
import { Cadastro } from './pages/Cadastro'
import { GlobalProvider } from './context/GlobalContext'
import { Filmes } from './pages/Filmes'
import { CadastraConteudo } from './pages/CadastraConteudo'
import { InfoConteudo } from './components/InfoConteudo'
import { Series } from './pages/Series'

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
      },
      {
        path: "/filmes",
        element: <Filmes/>
      },
      {
        path: "/cadastroconteudo",
        element: <CadastraConteudo/>
      },
      {
        path: "/conteudo/:id",
        element: <InfoConteudo/>
      },
      {
        path: "/series",
        element: <Series/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <RouterProvider router={rotas}/>
  </GlobalProvider>,
)
