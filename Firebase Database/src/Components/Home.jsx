import React from 'react'

const Home = () => {
    return (
        <>
            <div style={{ backgroundColor: "#f0f0f2" }}>
                <div className='homepage container'>
                    <div className="row justify-content-between">
                        <div className="col-8 left">
                            <div className='left-content'>
                                <h1 className='mb-4'>Select Your New Perfect Style</h1>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem tempore necessitatibus architecto repellat distinctio maiores nesciunt perspiciatis.</p>
                                <button>SHOP NOW</button>
                            </div>
                        </div>
                        <div className="col-3 right">
                            <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png" height={950} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
