import React from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Bosh sahifa/Home'
import About from './Components/Pages/Biz haqimizda/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
                  <Routes>
                         <Route element={<Layout/>}>
                               <Route path='/' element={<Home/>}/>
                               <Route path='/about' element={<About/>}/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
  )
}

export default App