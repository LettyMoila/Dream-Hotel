import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase'
import { useEffect, useState } from 'react'
import { data } from 'autoprefixer'
import TopBar from '../layouts/TopBar'

const Requests = () => {
    const [bookings, setBookings] = useState([])

    const add = async(fullname,email,roomType,numAdult,numChild,arrival,depature,pickup,comments) => {
        setBookings((bookings) => [
            ...bookings,
            {
                fullname: fullname,
                email: email,
                roomType: roomType,
                numAdult: numAdult,
                numChild: numChild,
                arrival: arrival,
                depature: depature,
                pickup: pickup,
                comments: comments,
            },
        ]);
    };

    const retrieve = (async()=>{
        try{
            const querySnapShot = await getDocs(collection(db, "booking"));

            const data = querySnapShot.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            }))

            setBookings(data);
            
        }catch(error){
            
        } 
       })

    useEffect(()=> {
        retrieve()
    }, [])

    return(
        <div className="h-screen">
            <TopBar />
            <section className="h-5/6 bg-vintageColor flex justify-center items-center">
            
                <div className='h-40 w-40'>
                    <ol>
                        <li>
                            <button className='bg-vintageColor w-24 rounded-tl-2xl rounded-br-2xl text-tcolor drop-shadow-2xl '>Accept</button>
                        </li>
                    </ol>
                </div>
            </section>
        </div>
    )
}

export default Requests
