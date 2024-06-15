import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
    return <>
        <div className='header' style={{ backgroundColor: "#fff4f2", borderBottom:"3px solid #fe5f41" }}>
            <div className="container navbar d-flex align-items-center">
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/restauco/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="nav-menus">
                <ul className='d-flex' style={{listStyle:"none"}}>
                    <li className='p-2 pt-4 ms-3 me-3'><h4 className='m-0'><a href='' style={{textDecoration:"none", color:"#4d312c", fontSize:"16px", fontWeight:"700" }}>Home</a></h4></li>
                    <li className='p-2 pt-4 ms-3 me-3'><h4 className='m-0'><a href="" style={{ textDecoration: "none", color:"#4d312c", fontSize:"16px", fontWeight:"700" }}>Menu</a></h4></li>
                    <li className='p-2 pt-4 ms-3 me-3'><h4 className='m-0'><a href="" style={{ textDecoration: "none", color:"#4d312c", fontSize:"16px", fontWeight:"700" }}>About</a></h4></li>
                    <li className='p-2 pt-4 ms-3 me-3'><h4 className='m-0'><a href="" style={{ textDecoration: "none", color:"#4d312c", fontSize:"16px", fontWeight:"700" }}>Blog</a></h4></li>
                    <li className='p-2 pt-4 ms-3 me-3'><h4 className='m-0'><a href="" style={{ textDecoration: "none", color:"#4d312c", fontSize:"16px", fontWeight:"700" }}>Contact</a></h4></li>
                </ul>
            </div>
            <div className="nav-links" style={{ color:"#4d312c" }}>
                <a className='me-4' style={{fontWeight:"800", textDecoration:"none", color:"#4d312c", padding:"10px 0", borderBottom:"3.4px solid #fe5f41"}} href="">Book a Table</a>
                <button style={{color:"white", backgroundColor:"#fe5f41", border:"2px solid #fe5f21", padding:"10px 20px", borderRadius:"40px", fontWeight:"700", fontSize:"16px"}}><FaPhoneAlt /> +10 (78) 783 3674</button>
            </div>
            </div>
        </div>
    </>
}

export default Header