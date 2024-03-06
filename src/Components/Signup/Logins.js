import React, { useState } from 'react'
import './Logins.css'
import { Link, useNavigate } from 'react-router-dom'
import firebase from '../Login/FirebaseConfig'
import {getAuth} from '../Login/FirebaseConfig'
import { toBeChecked } from '@testing-library/jest-dom/matchers'
import Main from '../main/Main'
const Logins = () => {
    const history = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Password, setPass] = useState('')
    const [number, setNum] = useState('')
    const Submit = async(e) =>{
        e.preventDefault()
       try { 
            const user = await firebase.auth().signInWithEmailAndPassword(email, Password)
    
            if (user)
            {
                alert("Login sucessfully")
                history("/Logins/Main")

            }
        } catch (error) {
            alert(error)
        }
    }

    
  return (
    <>
    
   <div>
    <div className='main'>
        <div className='head'>
            <h2>Login</h2>
        </div>
        <div className='box'>
            <input type='text' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='box'>
            <input type='text' value={Password} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
        </div>
        <p > Don't Have an Account ? <Link className='bon' to={'/'}>Sign up</Link></p>
        <button onClick={Submit}>Login</button>


     
  
    </div>
    
   </div>
   
        </>
  )
}

export default Logins
