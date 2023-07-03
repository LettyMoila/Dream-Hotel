import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Auth } from '../config/firebase'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Registration = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = (() =>{
        createUserWithEmailAndPassword(auth, email, password).then(() =>{
            alert("Successfully created account!");
        }).catch(() =>{
            console.log(error.message)
        })
    })
    return(
        <div className=" bg-cover h-screen bg-[url('./assets/Asian.png')] ">
            <div className='flex flex-col gap-y-16 justify-center pt-36 pl-20'>
                <div className='columns-2'>
                    <label>Fullname</label> <br/>
                    <input type='text' className='bg-buttonBack' onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='columns-2'>
                    <label>Email Address</label><br/>
                    <input type='email' className='bg-buttonBack' onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='columns-2'>
                    <label>Password</label><br/>
                    <input type='password' className='bg-buttonBack' onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className='columns-2'>
                    <label>Confirm Password</label><br/>
                    <input type='password' className='bg-buttonBack' onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className=''>
                    <Link to="/Explore"><button className='text-colorPink bg-buttonBack rounded-2xl h-8 w-40'>Sign Up</button></Link>
                    <div className='columns-2'>
                        <h3>Already have an account?</h3>
                        <Link to="/ClientLogin" className='text-colorPink'>Login</Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Registration
