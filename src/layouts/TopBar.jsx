import Wait from '../assets/Wait.png'
import View from '../assets/View.png'
import Tick from '../assets/Tick Box.png'
import Cancel from '../assets/Cancel.png'
import { Link } from 'react-router-dom'

const TopBar = () => {
    return(
        <section className="h-1/6 bg-buttonBack flex justify-between">
                <div>
                <span className="material-symbols-outlined justify-middle">menu</span>
                </div>
                <div className='flex gap-8 list-none'>
                    <li className=''>
                        <img src={Wait} />
                        <label className='flex align-middle'>pending</label>
                    </li>
                    <li>
                    <img src={Tick}/>
                    <label>Approved</label>
                    </li>
                    <li>
                    <img src={Cancel}/>
                    <label>Canceled</label>
                    </li>
                    <li>
                    <img src={View}/>
                    <label>View history</label>
                    </li>
                </div>
                <div>
                    <Link to="/AdminLogin">
                    <span className="material-symbols-outlined">logout</span>
                    </Link>
                </div>
            </section>
    )
}

export default TopBar