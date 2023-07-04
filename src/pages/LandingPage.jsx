import { Link } from 'react-router-dom'
import { useState } from 'react';
import binos from '../assets/Binoculars.png'

const LandingPage = () => {

    const [showOptions, setShowOptions] = useState(false);
  
    const handleButtonClick = () => {
      setShowOptions(!showOptions);
    }

    return(
      <div className="wrapUp h-screen flex">
        <div className="Wrapper bg-[url('./assets/Hobby.png')] bg-no-repeat bg-cover w-1/2">
          <h1 className='pl-4 text-8xl text-color1'>Oops!</h1>
          
            <div className='mt-52 ml-24 pl-4 text-6xl text-color1'>
            <h3 className=''>You've landed at the<br/> right spot..</h3>
          </div>
        </div>
        
        <div className='w-1/2 bg-vintageColor'>
          <div className='columns-2 p-3 flex justify-between'>
            <section>
            <button className='w-32 rounded-lg bg-buttonBack'>Get started</button>
            </section>
            <section className='flex gap-6'>
              <Link to="/Register">Register</Link>
              <div>
                <button onClick={handleButtonClick} className='w-32 rounded-lg bg-buttonBack'>Sign In</button>
                {showOptions && (
                  <div className='flex gap-2'>
                    <Link to="/ClientLogin"><button>client</button></Link>
                    <>|</>
                    <Link to="/AdminLogin"><button>admin</button></Link>
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className='h-96 m-6 mt-10 pt-26  tracking-widest'>
            
            <h1 className='pl-72 text-6xl'>DREAM <br/> HOTEL</h1>
            
            
            
            <div className='pl-28 h-40 m-6 flex'>
              <img src={binos}/>
              <section className='mt-6 pl-6'>
                <h1 className='text-6xl'>abu Dhabi</h1>
                <h2 className='text-xl'>United Arab Emirates</h2>
              </section>
            </div>
          </div>

        

          <div className='w-11/12 h-64 m-6 bg-buttonBack grid grid-cols-2 gap-6 p-4 content-center'>
            <section className='w-48 h-14 bg-unknown-color pt-3 pl-6'>
            <input type="date" id="datepicker" name="datepicker" min="2023-01-01" max="2024-12-31" className='bg-unknown-color'/>
            </section>
            <section className='w-48 h-14 bg-unknown-color pt-3 pl-6'>
              <span className="material-symbols-outlined align-middle">hotel</span>
              <select id="roomT" name="rooms" className='bg-unknown-color border-0'>
                    <option value="Standard" selected>Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="suite" >Suite</option>
                    <option value="Apartment">Apartment</option>
              </select>
            </section>
            <section className='w-48 h-14 bg-unknown-color pt-3 pl-6'>
              <span className="material-symbols-outlined align-middle">people</span>
              <select id="adultNo" name="adults" className='bg-unknown-color border-0'>
                    <option disabled selected value="">Adults</option>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
              </select>
            </section>
            <section className='w-48 h-14 bg-unknown-color pt-3 pl-6'>
              <span className="material-symbols-outlined align-middle">child_care</span>
              <select id="childNo" name="child" className='bg-unknown-color border-0'>
                                <option disabled selected value="">Child</option>
                                <option value="one">1</option>
                                <option value="two">2</option>
                                <option value="three">3</option>
                                <option value="four">4</option>
                            </select>
            </section>
          </div>
        </div>
      </div>
    )
}

export default LandingPage
