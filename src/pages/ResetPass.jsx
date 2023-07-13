import { useState } from "react"
import { auth } from "../config/firebase"
import { sendPasswordResetEmail } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const ResetPass = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const login = (()=>{
        navigate('/ClientLogin');
    })
    const submit =(()=>{
        sendPasswordResetEmail(auth, email).then(()=>{

        }).catch((error)=>{

        })
    })

    return(
        <div className="bg-vintageColor flex justify-center items-center h-screen">
            <div className="grid gap-24">
                <div className="flex justify-center items-center">
                    <div className="h-40 w-40 bg-[url('src/assets/key.jpg')] bg-no-repeat bg-cover rounded-full"></div>
                </div>
                <div className="grid gap-6">
                    <h1 className="text-6xl">Forgot password?</h1>
                    <h2 className="text-xl">No worries, we'll send you reset instructions</h2>
                </div>
                
                <div className="grid gap-3">
                    <label>Email</label>
                    <input type="text" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <button onClick={submit} className="text-colorPink">Reset password</button>
                </div>
                <button onClick={login} className="drop-shadow-2xl rounded-tl-2xl rounded-br-2xl bg-vintageColor w-52 ml-32">
                    <span className="material-symbols-outlined align-middle">arrow_back</span>
                    back to login
                </button>
            </div>
        </div>
        
    )
}

export default ResetPass
