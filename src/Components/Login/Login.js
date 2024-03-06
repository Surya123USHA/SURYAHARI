import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import firebase from './FirebaseConfig'
import './Login.css'
import {getAuth} from './FirebaseConfig'
import GOJO from './GOJO.jpg'
import { toBeChecked } from '@testing-library/jest-dom/matchers'
const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [Password, setPass] = useState('')
    const [number, setNum] = useState('')
    const Submit = async(e) =>{
        e.preventDefault()
        try{
            const user = await firebase.auth().createUserWithEmailAndPassword(email, Password)
            if (user)
            {
                alert("Account created sucessfully")
            }
        } catch (error) {
            alert(error)
        }
    }

  return (

    <div >
       
        
    <div className='main_con'>
        <div className='heada'>
            <h2>Signup</h2>
        </div>
        <div className='boxa'>
            <input type='text' value={name}  id="Uname" placeholder="Username" onChange={(e)=> setName(e.target.value)}></input>
        </div>
        <div className='boxa'>
            <input type='text' value={number} placeholder='Phone number' onChange={(e)=> setNum(e.target.value)}></input>
        </div>
        <div className='boxa'>
            <input type='text' value={email} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div className='boxa'>
            <input type='text' value={Password} placeholder='Password' onChange={(e) => setPass(e.target.value)}></input>
        </div>
        <p> Already Have an Account ?<a className='mom' href='/Logins'>Login Now</a></p>
        <button onClick={Submit}>Signup</button>


     
  
    </div>

    </div>
        
  )
}


export default Login
