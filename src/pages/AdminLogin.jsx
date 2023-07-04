import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useNavigate } from "react-router-dom"

const AdminLogin = () =>{ 
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");

    const signIn = (()=>{
        signInWithEmailAndPassword(auth, email, password).then(()=>{
        navigate('/AdminHome');
    }).catch(()=>{})
    })

    return(
        <div className="h-screen flex">
            <div className="flex flex-col gap-y-16 h-full w-5/12 bg-vintageColor justify-center items-center">
                <div className="">
                    <label>Admin ID</label>
                    <input type="text" placeholder="DH-" className="bg-buttonBack" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" className="bg-buttonBack" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <Link to="/AdminHome">forgot password?</Link>  
                </div>
                
                <button onClick={signIn} className="rounded-tl-2xl rounded-br-2xl bg-vintageColor drop-shadow-2xl w-24 text-tcolor">Login</button>
            </div>
            <div className="h-full w-7/12 bg-[url('./assets/clientBacground.png')] bg-no-repeat bg-cover"></div>
        </div>
    )
}

export default AdminLogin
