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
            <section className="h-5/6 bg-vintageColor flex justify-start items-center p-6">
            
                <div className='h-full w-full'>
                            {bookings.map((book) =>(
                                <div className="grid-cols-8 flex gap-6"> 
                                <h1> {book.fullname}</h1>
                                <h1>{book.email}</h1>
                                <h1>{book.roomType}</h1>
                                <h1>{book.numAdult}</h1>
                                <h1>{book.numChild}</h1>
                                <h1>{book.arrival}</h1>
                                <h1>{book.depature}</h1>
                                <h1>{book.pickup}</h1>
                                <h1>{book.comments} </h1>
                                <button className='bg-vintageColor w-24 rounded-tl-2xl rounded-br-2xl text-tcolor drop-shadow-2xl '>Accept</button>
                                <button className='bg-vintageColor w-24 rounded-tl-2xl rounded-br-2xl text-tcolor drop-shadow-2xl '>Delete</button>
                                </div>
                            ))}
                </div>
            </section>
        </div>
    )
}

export default Requests
