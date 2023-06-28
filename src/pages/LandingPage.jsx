import { Link } from 'react-router-dom'
import binos from '../assets/Binoculars.png'

const LandingPage = () =>{
    return(
      <div className="wrapUp h-screen flex">
        <div className="Wrapper bg-[url('./assets/Hobby.png')] bg-no-repeat bg-cover w-1/2">
          <h1 className='pl-4 text-8xl text-color1'>Oops!</h1>
          
            <div className='mt-52 ml-24 pl-4 text-6xl text-color1'>
            <h3 className=''>You've landed at the right spot..</h3>
          </div>
        </div>
        
        <div className='w-1/2 bg-vintageColor'>
          <div className='columns-2 p-3 flex gap-80'>
            <section>
            <button className='w-32 rounded-lg bg-buttonBack'>Get started</button>
            </section>
            <section>
              <Link to="/Register">Register</Link>
            <Link to="/Explore"><button className='ml-6 w-16 rounded-lg bg-buttonBack'>Login</button></Link>
            </section>
          </div>

          <div className='h-96 m-6 mt-10 pt-26  tracking-widest '>
            
            <h1 className='pl-48 text-6xl'>DREAM <br/> HOTEL</h1>
            
            
            
            <div className='h-40 m-6 flex'>
              <img src={binos}/>
              <section className='mt-6'>
                <h1 className='text-6xl'>abu Dhabi</h1>
                <h2 className='text-xl'>United Arab Emirates</h2>
              </section>
            </div>
          </div>

        

          <div className='w-11/12 h-64 m-6 bg-buttonBack grid grid-cols-2 gap-6 p-4 content-center'>
            <section className='w-48 h-14 bg-unknown-color'>
              <span className="material-symbols-outlined">calendar_month</span>
            </section>
            <section className='w-48 h-14 bg-unknown-color'>
              <span className="material-symbols-outlined">hotel</span>
            </section>
            <section className='w-48 h-14 bg-unknown-color'>
              <span className="material-symbols-outlined">people</span>
            </section>
            <section className='w-48 h-14 bg-unknown-color'>
            <span className="material-symbols-outlined">child_care</span>
            </section>
          </div>
        </div>
      </div>
    )
}

export default LandingPage
