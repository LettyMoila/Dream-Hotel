import { Link } from 'react-router-dom'

const Registration = () =>{
    return(
        <div className=" bg-cover h-screen bg-[url('./assets/Asian.png')] ">
            <div className='w-80 h-96 flex flex-col gap-y-16 place-self-center pt-8 ml-8'>
                <div className='columns-2'>
                    <label>Fullname</label>
                    <input type='text' className='bg-buttonBack'/>
                </div>

                <div className='columns-2'>
                    <label>Email Address</label>
                    <input type='email' className='bg-buttonBack'/>
                </div>

                <div className='columns-2'>
                    <label>Password</label>
                    <input type='password' className='bg-buttonBack'/>
                </div>

                <div className='columns-2'>
                    <label>Confirm Password</label>
                    <input type='password' className='bg-buttonBack'/>
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
