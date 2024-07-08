import 'bootstrap/dist/css/bootstrap.min.css';
import { GoHorizontalRule } from "react-icons/go";
import './App.css'

function App() {

  return (
    <>
      <div className="container-fluid" style={{ zIndex: "-2" }}>
        <div className="row justify-content-center">
          <div className="navbar col-10 ps-3 pe-3 pt-4 pb-4 col-sm-12 col-xxl-10 ps-xxl-0 pe-xxl-0" style={{ position: "absolute" }}>
            <div className="logo mb-sm-4">
              <img src="https://preview.colorlib.com/theme/myphotography/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="nav-links d-flex justify-content-center align-items-center">
              <ul className='d-flex mb-0 ps-0'>
                <li className='ps-4 pe-3 ps-sm-2 pe-sm-2 ps-md-4 pe-md-3'><a href="">Home</a></li>
                <li className='ps-4 pe-3 ps-sm-2 pe-sm-2 ps-md-4 pe-md-3'><a href="">About</a></li>
                <li className='ps-4 pe-3 ps-sm-2 pe-sm-2 ps-md-4 pe-md-3'><a href="">Gallery</a></li>
                <li className='ps-4 pe-3 ps-sm-2 pe-sm-2 ps-md-4 pe-md-3'><a href="">Services</a></li>
                <li className='ps-4 pe-3 ps-sm-2 pe-sm-2 ps-md-4 pe-md-3'><a href="">Blog</a></li>
                <li className='ps-4 pe-3 ps-sm-2 pe-sm-2 ps-md-4 pe-md-3'><a href="">Contact</a></li>
              </ul>
              <div className="nav-btn ps-5 d-sm-none d-lg-block ps-lg-3 ps-xl-5">
                <button>CONTACT NOW</button>
              </div>
            </div>
          </div>
          <div className="left ps-5 col-4 d-flex flex-column justify-content-center col-sm-12 order-sm-2 p-sm-4 col-xl-2 order-xl-1 col-xxl-4">
            <div className='left-content ps-5 ms-5 p-sm-0 m-sm-0 ps-xxl-5 ms-xxl-5'>
              <h3 className='mb-4'><GoHorizontalRule /> Creative Photographey</h3>
              <h1 className='mb-5 mb-md-4 mb-lg-5'>Photography Make us happy Take a shot.</h1>
              <button className='portfolio-btn'>WATCH PORTFOLIO</button>

            </div>
          </div> 
          <div className="right col-8 col-sm-12 order-sm-1 col-xl-10 order-xl-2 col-xxl-8" style={{ zIndex: "-1" }}>
            <img src="https://preview.colorlib.com/theme/myphotography/assets/img/hero/hero_man1.png" style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
