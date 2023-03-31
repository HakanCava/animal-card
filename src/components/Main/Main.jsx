import Card from "../Card/Card"
import {data} from "../../helpers/data"
import "./Main.scss"
import Footer from "../Footer/Footer"
const Main =()=>{
    
    return (
        <div className="main">
            {data.map((item)=>(<Card {...item}/>))}
            <Footer/>
        </div>
    )
}

export default Main