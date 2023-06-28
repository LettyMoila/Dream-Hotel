import { Link } from "react-router-dom"

const Explore = () =>{
    return(
        <div className='h-screen '>
            <section className=" h-1/2 bg-vintageColor">
                <div>
                    Let's <br/> Explore
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
                    Hot deals
                </div>

                <div className="grid grid-cols-5 gap-6 h-5/6 p-6">
                    <div className="bg-[url('./assets/Food.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/Cafe-background.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/Background.png')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="bg-[url('./assets/essentia-luxury-hotel.jpg')] bg-no-repeat bg-cover rounded-2xl"></div>
                    <div className="p-32 ">
                        <Link to="/Items"><span className="material-symbols-outlined">arrow_forward_ios</span></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explore
