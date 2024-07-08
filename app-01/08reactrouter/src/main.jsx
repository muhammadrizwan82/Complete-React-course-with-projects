import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home, Contact, About, Layout, User } from './components/index.js'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Login from './components/Login/Login.jsx'

// const router = createBrowserRouter(
//   [{
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home /> },
//       { path: 'home', element: <Home /> },
//       { path: 'contact', element: <Contact /> },
//       { path: 'about', element: <About /> }
//     ]}
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} >
        <Route path='about' element={<About />} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route
        path='github'
        element={<Github />}
        loader={githubInfoLoader}
      />
      <Route path="/login" element={<Login />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
