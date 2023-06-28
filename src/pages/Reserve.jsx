import { Link } from "react-router-dom"

const Reserve = () =>{
    return(
        <div className="h-screen bg-vintageColor ">
            <div className="bg-[url('./assets/bedroom1.png')] bg-no-repeat bg-cover h-5/6 w-7/12">
                    <Link to="/Items"></Link>
            </div>

            <div className="h-5/6 w-5/12 bg-unknown-color">
                France breeze experience chalet
            </div>
        </div>
    )
}

export default Reserve
