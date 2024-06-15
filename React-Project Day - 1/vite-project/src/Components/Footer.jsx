import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestSquare } from "react-icons/fa";


function Footer() {
    return <>
        <div className='footer' style={{ backgroundColor: "#fff4f2", color: "#4d312c", borderTop:"3px solid #fe5f21" }}>
            <div className='container p-5 pb-3 ps-0 pe-0'>
                <div className="row">
                    <div className="col-4">
                        <img className='mb-4' src="https://preview.colorlib.com/theme/restauco/assets/img/logo/logo2_footer.png" alt="" />
                        <p className='mb-4' style={{textAlign:"justify"}}>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p>
                        <p style={{color:"#fe5f21"}}>
                            <FaTwitterSquare className='me-4' style={{fontSize:"26px"}} />
                            <FaFacebookSquare className='me-4' style={{fontSize:"26px"}} />
                            <FaLinkedin className='me-4' style={{fontSize:"26px"}} />
                            <FaPinterestSquare className='me-4' style={{fontSize:"26px"}} />
                        </p>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-center">
                        <h4 className='mb-4'>Quick Links</h4>
                        <ul>
                            <li className='mb-3' style={{listStyle:"none"}}>Home</li>
                            <li className='mb-3' style={{listStyle:"none"}}>About</li>
                            <li className='mb-3' style={{listStyle:"none"}}>Services</li>
                            <li className='mb-3' style={{listStyle:"none"}}>Blog</li>
                            <li className='mb-3' style={{listStyle:"none"}}>Contact</li>
                        </ul>
                    </div>
                    <div className="col-2 d-flex flex-column align-items-center">
                        <h4 className='mb-4'>Cakes</h4>
                        <ul>
                            <li className='mb-3' style={{listStyle:"none"}}>Blackforest</li>
                            <li className='mb-3' style={{listStyle:"none"}}>Bodhubon</li>
                            <li className='mb-3' style={{listStyle:"none"}}>Rongdhonu</li>
                            <li className='mb-3' style={{listStyle:"none"}}>Meghrong</li>
                        </ul>
                    </div>
                    <div className="col-3 d-flex flex-column align-items-center">
                        <h4 className='mb-4'>Contact Us</h4>
                        <p className='mb-4' style={{ textAlign: "justify" }}>76/A, Green Lane, Dhanmondi, NYC</p>
                        <h5 className='mb-4' style={{color:"#fe5f21"}}>+10 (78) 738-9083</h5>
                        <h6 className='mb-4' style={{color:"#fe5f21"}}>restaurco89@gmail.com</h6>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Footer