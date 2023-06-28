import { Link } from "react-router-dom"

const Items = () =>{
   return(
    <div className="bg-vintageColor h-screen">
        <h1>Hot deals</h1>

        <div className="grid grid-cols-3 h-5/6 gap-3 p-4">
            <div className="bg-[url('./assets/bedroom1.png')] bg-no-repeat bg-cover">
                <Link to="/Reserve"><button>Book now</button></Link>
            </div>
            <div className="bg-[url('./assets/bedroom2.png')] bg-no-repeat bg-cover">
                <Link to="/Reserve"><button>Book now</button></Link>
            </div>
            <div className="bg-[url('./assets/bedroomWithCouch.jpg')] bg-no-repeat bg-cover">
                <Link to="/Reserve"><button>Book now</button></Link>
            </div>
            <div className="bg-[url('./assets/twoBeds.jpg')] bg-no-repeat bg-cover">
                <Link to="/Reserve"><button>Book now</button></Link>
            </div>
            <div className="bg-[url('./assets/sea-view-bedroom.jpg')] bg-no-repeat bg-cover">
                <Link to="/Reserve"><button>Book now</button></Link>
            </div>
            <div className="bg-[url('./assets/mountainView.jpg')] bg-no-repeat bg-cover">
                <Link to="/Reserve"><button>Book now</button></Link>
            </div>
        </div>
    </div>
   )
}

export default Items
