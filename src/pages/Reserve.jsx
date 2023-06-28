import { Link } from "react-router-dom"

const Reserve = () =>{
    return(
        <div className="h-screen bg-vintageColor flex gap-12">
            <div className="h-full w-6/12">
                <section className="bg-[url('./assets/bedroom1.png')] bg-no-repeat bg-cover h-5/6">
                    <Link to="/Items"></Link>
                </section>
                <section className="flex p-10">
                    <div className="">
                        <h1>Price</h1>
                        <span className="flex">
                            <h2>R2500</h2>
                            <h3>/night</h3>
                        </span>
                        
                    </div>
                    <div className="pl-80">
                        <Link to="/Booking">
                            <button className="bg-deep-blue rounded-xl w-40">Reserve now</button>
                        </Link>
                    </div>
                    
                    
                </section>
                    
            </div>

            <div className="h-596 w-6/12 bg-unknown-color m-4">
                France breeze experience chalet
            </div>
        </div>
    )
}

export default Reserve
