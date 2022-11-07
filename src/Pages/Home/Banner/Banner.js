import React from 'react';
import './Banner.css'
<img src="https://i.ibb.co/djVLC2J/th-id-OIP.jpg" alt="th-id-OIP" border="0"></img>

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://tse1.mm.bing.net/th?id=OIP.L-3_8o-qCiwqx5VeZkDykgHaE8&pid=Api&P=0" alt="" className="carousel-img w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                    <p className='font-semibold text-orange-300'>SAY HAPPY THANKSGIVING</p>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/3">
                    <h1 className='text-5xl font-bold text-orange-600'>So <br /> Grateful</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
                    <p className='font-bold text-orange-400'>Tell someone they’re on your list of blessings.</p>

                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-6">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>




            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://tse3.mm.bing.net/th?id=OIP._TjwHXG8U9-gKFmYg0_rTgHaFJ&pid=Api&P=0" alt='' className="carousel-img w-full" />


                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                    <p className='font-semibold text-orange-300'>THE ULTIMATE GET WELL GIFT</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/3">
                    <h1 className='text-5xl font-bold text-orange-600'>Feel <br /> Really, <br /> Really Better</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
                    <p className='font-bold text-orange-400'>Send a meal, a blanket, even a Get Well Bell.</p>

                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-6">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>


            </div>



            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://tse1.mm.bing.net/th?id=OIP.NMKzkg3zBBCBcM0hiKzIGQHaFR&pid=Api&P=0" alt='' className="w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                    <p className='font-semibold text-orange-300'>THE SPOONFUL REWARDS CLUB</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/3">
                    <h1 className='text-5xl font-bold text-orange-600'>Karma <br /> and <br /> Kindness</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
                    <p className='font-bold text-orange-400'>Tell someone they’re on your list of blessings.</p>

                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-6">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>


            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://tse1.mm.bing.net/th?id=OIP.FbVF_qEwfl1_tJpxLnc7xQHaFJ&pid=Api&P=0" alt='' className="carousel-img2 w-full" />

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/4">
                    <p className='font-semibold text-orange-300'>SAY HAPPY THANKSGIVING</p>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/3">
                    <h1 className='text-5xl font-bold text-orange-600'>So <br /> Grateful</h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 top-1/2">
                    <p className='font-bold text-orange-400'>Tell someone they’re on your list of blessings.</p>

                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-6">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;