import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import PageNotfound from "./pageNotFound";
import "./style.css"
// import logo from "/logo.svg"
// import profile1 from '../../images/profile-1.jpg'


function Routing(){
    return(
        <>
        <div >
        <img src="https://th.bing.com/th/id/OIP.gfeUC-YlRdgeJgWG4zG-TwHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"  className="firstimg"></img>
       <div className="tech">
        <h1> TECHNINZA</h1>
        <h3>TECHNOLOGY NINZA</h3>
        </div>
        
        <BrowserRouter>
        <ul className="navbar">
            <li><Link to={"bhavna"}>Home</Link></li>
            <li><Link to={"About"}>About</Link></li>
            <li><Link to={"Service"}>Service</Link></li>
            <li><Link to={"*"}></Link></li>
        
        </ul>
        <Routes>
            <Route exact path="bhavna" element={<Home/>} ></Route>
       
            <Route exact path="About" element={<About/>} ></Route>
            <Route exact path="Service" element={<Service/>} ></Route>
            <Route exact path ="*" element={<PageNotfound/>}></Route>
        </Routes>
        
        </BrowserRouter>
        </div>
      
        </>
    )
}
export default Routing;