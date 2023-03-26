import logo from './logo.svg';
import './App.css';
import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Layout from './Components/Layyout/Layout';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Notfound from './Components/Notfound/Notfound';


const routers = createBrowserRouter([
    { path:"", element: <Layout/> ,children:[
      { path: "/",element: <Home /> },
      { path: "home",element: <Home /> },
      { path: "portfolio", element : <Portfolio/> },
      { path: "about", element : <About/> },
      { path: "contact", element : <Contact/> },
    ]},
    { path : "*", element :<Notfound/> }
    
])



export default function App() {
  return <>
  
  <RouterProvider router={routers}/>
  
  
  </>
}



