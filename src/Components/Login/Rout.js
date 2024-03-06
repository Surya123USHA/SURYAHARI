import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './Login'
import Logins from '../Signup/Logins'
import Main from '../main/Main'
import Sub from '../Sub/Sub '
import Sem from '../Sem/Sem'
import About from '../main/About'
import Semns from '../Sem/Semns'
import Semn from '../Sem/Semn'
import Contact from '../main/Contact'
export default function Rout() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/Logins' element={<Logins/>}/>
            <Route path='/Logins/Main' element={<Main/>}/>
            <Route path='/Logins/Main/Sub' element={<Sub/>}/>
            <Route path='/Logins/Main/Contact' element={<Contact/>}/>
            <Route path='/Logins/Main/Sub/sem' element={<Sem/>}/>
            <Route path='/Logins/Main/Sub/semn' element={<Semn/>}/>
            <Route path='/Logins/Main/Sub/semns' element={<Semns/>}/>
            <Route path='/Logins/Main/about' element={<About/>}/>

            
        </Routes>
      
    </div>
  )
}
