import { Link } from "react-router-dom"
import SalesButton from "../layouts/SalesButton"

const Explore = () =>{
    return(
        <div className='h-screen '>
            <section className=" h-1/2 bg-vintageColor">
                <div className="flex gap-4">
                    <span className="text-lg">Let's <br/> Explore</span>
                    <span className="material-symbols-outlined">search</span>
                </div>

                <div className="grid grid-cols-6 gap-6 h-5/6 p-6">
                    <div className="bg-[url('./assets/Food.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/Cafe-background.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/Background.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/essentia-luxury-hotel.jpg')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/clientBacground.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/Hobby.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                </div>
            </section>
            <section className=" h-1/2 bg-vintageColor">
                <div>
                    <h1 className="text-lg te">Hot deals</h1>
                </div>

                <div className="grid grid-cols-5 gap-6 h-5/6 p-6">
                    <div className="bg-[url('./assets/Food.png')] bg-no-repeat bg-cover rounded-2xl">
                        <SalesButton text={"25% off"}/>
                        <h4 className="text-2xl translate-y-60 pl-64">R2500</h4>
                    </div>
                    <div className="bg-[url('./assets/Cafe-background.png')] bg-no-repeat bg-cover rounded-2xl">
                     <SalesButton text={"25% off"}/>
                     <h4 className="text-2xl translate-y-60 pl-64">R3250</h4>
                    </div>
                    <div className="bg-[url('./assets/Background.png')] bg-no-repeat bg-cover rounded-2xl">
                     <SalesButton text={"15% off"}/>
                     <h4 className="text-2xl translate-y-60 pl-64">R5000</h4>
                    </div>
                    <div className="bg-[url('./assets/essentia-luxury-hotel.jpg')] bg-no-repeat bg-cover rounded-2xl">
                     <SalesButton text={"5% off"}/>
                     <h4 className="text-2xl translate-y-60 pl-64">R4050</h4>
                    </div>
                    <div className="p-32 ">
                        <Link to="/Items"><span className="material-symbols-outlined">arrow_forward_ios</span></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explore
