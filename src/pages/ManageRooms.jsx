import { useState } from 'react'
import {db} from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'

const ManageRooms = () => {
const [price, setPrice] = useState('');

const add = (async() =>{
 
    try{
        const docRef = await addDoc(collection(db, 'rooms'),{
            price: price,
            });
            alert("Added successfully")
        }catch(error){

        }
    


})
    
    return(
        <div>
            <input type='text' onChange={(e) =>setPrice(e.target.value)}></input>
        </div>
    )
}

export default ManageRooms
