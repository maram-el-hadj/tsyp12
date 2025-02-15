import "./components.css"
import logo from '../assets/logo.png'
function Navbar (){

    return(
        <div className="nav">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <img className="w-40 pt-4 pb-4" src={logo} alt="" />
                </div>
                <div className="list">
                    <ul className=" gap-x-6 lg:flex">
                   
                    <li className=" lg:hidden border-none"><a href=""><i class="lg:hidden fa-solid fa-xmark"></i></a></li>
                    <li className=" lg:hidden"><a href="">TSYP 12</a></li>
                    <li><a href="" className="font-bold">Home</a></li>
                    <li><a href="" className="font-bold">Tunisia</a></li>
                    <li><a href="" className="font-bold">TN 2056</a></li>
                    <li><a href="" className="font-bold">Speakers</a></li>
                    <li className="hidden lg:block"><a href="" className="font-bold">Program<i class="fa-solid fa-chevron-down "></i></a></li>
                    <li className="block lg:hidden"><a href="" className="font-bold">Challenges</a></li>
                    <li className="block lg:hidden"><a href="" className="font-bold">Schedule</a></li>
                    
                    <li><a href="" className="font-bold">Awards</a></li>
                    <li className="block lg:hidden"><a href="" className="font-bold">Venue</a></li>
                    <li><a href="" className="font-bold">Partners</a></li>
                    <li><a href="" className="font-bold">About us </a></li>
                    <li className="flex gap-x-4 justify-end">
                        <a href="#"><i className="fa-brands fa-github lg:hidden"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook lg:hidden"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram lg:hidden"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin lg:hidden"></i></a>
                        <a href="#"><i className="fa-solid fa-moon"></i></a>
                    </li>
                </ul>
                <div className="menu lg:hidden block">
                   <i className="fa-solid fa-bars"></i> 
                    <li className="hidden"><a href=""><i class="fa-solid fa-xmark"></i></a></li>
                </div>
                </div>
               
            </div>
        </div>
    )
}
export default Navbar;