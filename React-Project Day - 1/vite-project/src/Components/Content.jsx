import 'bootstrap/dist/css/bootstrap.min.css';

function Content() {
    return <>
        <div className='content' style={{ backgroundColor: "#fff4f2"}}>
            <div className='container pt-5 pb-5' >
                <div className="row">
                    <div className="col-5 p-5 pt-4 pb-4 ps-0">
                        <h1 className='mb-4' style={{ fontSize:"55px", color:"#4d312c", fontWeight:"700" }}>Meet, Eat & Enjoy the true test</h1>
                        <p className='mb-4' style={{ textAlign:"justify", fontSize:"24px" }}>Making a reservation at Délicious restaurant is easy and takes just a couple of minutes.
                        </p>
                        <img className='me-5 mb-5' src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services1.svg" alt="" />
                        <img className='me-5 mb-5' src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services2.svg" alt="" />
                        <img className='me-5 mb-5' src="https://preview.colorlib.com/theme/restauco/assets/img/icon/services3.svg" alt="" />
                        <button style={{color:"white", backgroundColor:"#fe5f41", border:"1px solid #fe5f21", padding:"18px 55px", borderRadius:"40px", fontWeight:"600", fontSize:"20px"}}>Our Menu</button>
                    </div>
                    <div className="col-7" style={{ backgroundImage:"url('https://preview.colorlib.com/theme/restauco/assets/img/hero/h1_hero1.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover", borderRadius:"20px"}}>
                    </div>
                </div>
                
            </div>
        </div>
    </>
}

export default Content