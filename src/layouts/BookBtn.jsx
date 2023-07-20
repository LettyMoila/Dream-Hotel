const BookBtn = ({text}) =>{
    return(
        <div className="p-2">
            <button onClick className="bg-buttonBack w-36 h-10 rounded-full">{text}</button>
        </div>
    )
}

export default BookBtn
