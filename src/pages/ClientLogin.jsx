import { Link } from 'react-router-dom'
import google from '../assets/Google-old.png'
import facebook from '../assets/Facebook.png'
import apple from '../assets/Apple-Logo.png'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

const ClientLogin = () =>{
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    signInWithEmailAndPassword(auth, email, pass).then(()=>{
        nav('/Explore');
    }).catch((error)=>{
        alert(error.message)
    })

    return(
    <div className='h-screen flex'>
        <div className='bg-vintageColor h-full w-8/12'>
            <div className='h-40 m-6 mt-10 pt-26  tracking-widest '>
            <h1 className='pl-48 text-6xl'>DREAM HOTEL</h1>
            </div>

            <div className='w-80 h-96 flex flex-col gap-y-16 place-self-center pt-8 ml-60'>
                <div className='columns-2'>
                    <label>Username/email</label>
                    <input type='text' className='bg-buttonBack' onChange={(e)=>setEmail(e.target.value)}/>
                </div>

                <div className='columns-2'>
                    <label>Password</label>
                    <input type='password' className='bg-buttonBack' onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                <div className=''>
                    <button className='text-tcolor bg-buttonBack rounded-tl-2xl rounded-br-2xl drop-shadow-2xl h-8 w-40'>Login</button>
                    <div className='columns-2'>
                        <h3>Don't have an account?</h3>
                        <Link to="/Register" className='text-tcolor'>Sign up</Link>
                    </div>
                </div>

                <div className=''>
                   <h3 className='text-tcolor'>or continue with:</h3>
                   <ul className='flex gap-4 pt-6'>
                    <li><img src={google}/></li>
                    <li><img src={facebook}/></li>
                    <li><img src={apple}/></li>
                   </ul>
                </div>
            </div>
        </div>
        
        <div className="bg-[url('./assets/clientBacground.png')] bg-no-repeat bg-cover h-full w-4/12">
            
        </div>
    </div>
    )
    
}

export default ClientLogin
