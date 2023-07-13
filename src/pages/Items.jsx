import { Link } from "react-router-dom"
import SalesButton from "../layouts/SalesButton"
import BookBtn from "../layouts/BookBtn"

const Items = () =>{
   return(
    <div className="bg-vintageColor h-screen">
        <h1>Hot deals</h1>

        <div className="grid grid-cols-3 h-5/6 gap-3 p-4">
            <div className="bg-[url('./assets/bedroom1.png')] bg-no-repeat bg-cover">
                <SalesButton text={"5% off"}/>
                <div className="translate-y-52 ">
                    <section>
                        <h1>deluxe twin room</h1>
                        <h6>2 single beds</h6>
                    </section>
                    
                    <section className="flex justify-between">
                        <Link to="/Reserve">
                            <BookBtn text={"Book now"}/>
                        </Link>
                        <h3>R2500</h3>
                    </section>
                </div>
                
            </div>
            <div className="bg-[url('./assets/bedroom2.png')] bg-no-repeat bg-cover">
                <SalesButton text={"5% off"}/>
                <div className="translate-y-52 ">
                    <section>
                        <h1>Apartment style room</h1>
                        <h6>california king bed</h6>
                    </section>

                    <section className="flex justify-between">
                        <Link to="/Reserve">
                        <BookBtn text={"Book now"}/>
                        </Link>
                        <h3>R3250</h3>
                    </section>
                </div>
            </div>
            <div className="bg-[url('./assets/bedroomWithCouch.jpg')] bg-no-repeat bg-cover">
                <SalesButton text={"5% off"}/>
                
                <div className="translate-y-52 ">
                    <section>
                        <h1>Presidential suite</h1>
                        <h6>presidential king bed</h6>
                    </section>
                    <section className="flex justify-between">
                        <Link to="/Reserve">
                        <BookBtn text={"Book now"}/>
                        </Link>
                        <h3>R5000</h3>
                    </section>
                </div>
                
            </div>
            <div className="bg-[url('./assets/twoBeds.jpg')] bg-no-repeat bg-cover">
                <SalesButton text={"5% off"}/>
                <div className="translate-y-52 ">
                    <section>
                        <h1>Egyptian royalty room</h1>
                        <h6>2 queen beds</h6>
                    </section>
                    <section className="flex justify-between">
                        <Link to="/Reserve">
                            <BookBtn text={"Book now"}/>
                        </Link>
                        <h3>R4050</h3>
                    </section>   
                </div>
                
            </div>
            <div className="bg-[url('./assets/sea-view-bedroom.jpg')] bg-no-repeat bg-cover">
                <SalesButton text={"5% off"}/>
                <div className="translate-y-52 ">
                    <section>
                        <h1>standard room</h1>
                        <h6>double bed</h6>
                    </section>
                    <section className="flex justify-between">
                        <Link to="/Reserve">
                            <BookBtn text={"Book now"}/>
                        </Link>
                        <h3>R4050</h3>
                    </section>
                </div>
                
            </div>
            <div className="bg-[url('./assets/mountainView.jpg')] bg-no-repeat bg-cover">
                <SalesButton text={"5% off"}/>
                <div className="translate-y-52 ">
                    <section>
                        <h1>comfort twin room</h1>
                        <h6>2 single beds</h6>
                    </section>
                    <section className="flex justify-between">
                        <Link to="/Reserve">
                            <BookBtn text={"Book now"}/>
                        </Link>
                        <h3>R4050</h3>
                    </section>
                </div>
                
            </div>
        </div>
    </div>
   )
}

export default Items
