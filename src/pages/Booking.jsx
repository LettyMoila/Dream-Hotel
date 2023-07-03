import { Link } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';

const Booking = () =>{
    let handleClick = () => {
        alert('Received! Dream hotel will contact you.');
      }

      const componentDidMount = () => {
        window.location.href = '/Explore'; // Navigate to the explore page when the page refreshes
      }

    return(
        <div className="h-screen flex">
            <div className="h-full w-1/2 bg-vintageColor p-8">
                <div className="h-24 pl-60 text-2xl">
                    <Link to=""></Link>
                    <h1>Book A Room</h1>
                </div>

                <form className="h-3/5 pl-28 grid gap-8">
                   <div className='columns-2 flex gap-4'>
                        <label>Fullname</label>
                        <input type='text' className='bg-buttonBack'/>
                    </div>

                    <div className='columns-2 flex gap-4'>
                        <label>Email</label>
                        <input type='email' className='bg-buttonBack'/>
                    </div>

                    <div className='columns-2 flex gap-4'>
                        <label>Room Type</label>
                        <select id="roomT" name="rooms" className='bg-buttonBack'>
                            <option value="Standard" selected>Standard</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="suite" >Suite</option>
                            <option value="Apartment">Apartment</option>
                        </select>
                    </div>

                    <div className='columns-2 flex gap-4'>
                        <label>Number of Guests</label>
                        <div className='flex gap-4'>
                            <section>
                                <span className="material-symbols-outlined bg-buttonBack ">people</span>
                                <select id="adultNo" name="adults" className='bg-buttonBack'>
                                <option disabled selected value="">Adults</option>
                                <option value="one">1</option>
                                <option value="two">2</option>
                                <option value="three">3</option>
                                <option value="four">4</option>
                            </select>
                            </section>

                            <section>
                                <span className="material-symbols-outlined align-center bg-buttonBack">child_care</span>
                                <select id="childNo" name="child" className='bg-buttonBack'>
                                <option disabled selected value="">Child</option>
                                <option value="one">1</option>
                                <option value="two">2</option>
                                <option value="three">3</option>
                                <option value="four">4</option>
                            </select>
                            </section>
                        </div>
                        
                    </div>

                    <div className='columns-2 flex gap-4'>
                        <label>Arrival Date & Time</label>
                        <div className='flex gap-4'>
                            <input type="date" id="datepicker" name="datepicker" min="2023-01-01" max="2024-12-31" className='bg-buttonBack'/>
                            <input type="time" id="timepicker" name="timepicker" min="09:00" max="18:00" className='bg-buttonBack'/>
                        </div>
                    </div>

                    <div className='columns-2 flex gap-4'>
                        <label>Depature Date</label>
                        <input type="date" id="datepicker" name="datepicker" min="2023-01-01" max="2024-12-31" className='bg-buttonBack'/>
                    </div>

                    <div className='columns-2 flex gap-4'>
                        <label>Free Pickup?</label>
                        <span>
                            <input type='radio' className='bg-buttonBack' /><label>Yes, please!</label>
                            <input type='radio' className='bg-buttonBack'/><label>No, Thanks</label>
                        </span>   
                    </div>

                    <div className='columns-2 flex gap-4'>
                        <label >Comments</label>
                        <textarea type='password' rows="10" cols="30" className='bg-buttonBack'/>
                    </div>

                    <div className="pl-36">
                        <button onClick={handleClick} className='bg-vintageColor w-24 rounded-tl-2xl rounded-br-2xl text-tcolor drop-shadow-2xl '>Submit</button>    
                    </div>
                </form>
            </div>

            <div className="h-full w-1/2 bg-[url('./assets/poolSide.jpg')] bg-no-repeat bg-cover"></div>
        </div>
    )
}

export default Booking
