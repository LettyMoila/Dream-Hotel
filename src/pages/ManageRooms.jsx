import { useState } from 'react'
import {db} from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'

import { imgOB } from '../config/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

import { Link } from 'react-router-dom'
import TopBar from '../layouts/TopBar'
import BookBtn from '../layouts/BookBtn'

const ManageRooms = () => {
    const [discount, setDiscount] = useState('');
    const [roomType, setRoom] = useState('');
    const [beds, setBed] = useState('');
    const [price, setPrice] = useState('');
    const [pict, setImg] = useState('');

    const add = (async() =>{
 
    try{
        const docRef = await addDoc(collection(db, 'rooms'),{
            discount: discount,
            roomType: roomType,
            beds: beds,
            price: price,
            pict: pict,
            });
            const imgRef = ref(imgOB, `rooms/${imageUpload.name}`);

            uploadBytes(imgRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    console.log(url);
                });
            })
            alert("Added successfully")
        }catch(error){

        }
})
    
    return(
        <div className="h-screen">
            <TopBar/>
            <section className="h-5/6 bg-vintageColor p-6">
                <div className='grid grid-cols-6 gap-5'>
                    <input type='text' placeholder='Discount' onChange={(e) =>setDiscount(e.target.value)}/>
                    <input type='text' placeholder='room type' onChange={(e) =>setRoom(e.target.value)}/>
                    <input type='text' placeholder='bed number and type/s' onChange={(e) =>setBed(e.target.value)}/>
                    <input type='text' placeholder='Price' onChange={(e) =>setPrice(e.target.value)}/>
                    <input type='file' onChange={(e) =>setImg(e.target.files[0])}/>
                    <BookBtn onClick={add} text={"Done"}/>
                </div>
            </section>
        </div>
        
    )
}

export default ManageRooms
