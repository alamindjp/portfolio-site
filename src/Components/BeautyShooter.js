import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import beautyShooter1 from '../Assets/webImage/BeautyShooter1.png'
import beautyShooter2 from '../Assets/webImage/BeautyShooter2.png'
import beautyShooter3 from '../Assets/webImage/BeautyShooter3.png'
import beautyShooter4 from '../Assets/webImage/BeautyShooter1.png'

const BeautyShooter = () => {
    return (
        <div>
            <Navbar />
            <h2 className="text-5xl mt-10 pb-5 shadow-lg">Site Details</h2>
            <div className="container mx-auto card mt-20">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <figure><img className='card opacity-90' src={beautyShooter1} alt="Shoes" /></figure>
                    <figure><img className='card opacity-90' src={beautyShooter2} alt="Shoes" /></figure>
                    <figure><img className='card opacity-90' src={beautyShooter3} alt="Shoes" /></figure>
                    <figure><img className='card opacity-90' src={beautyShooter4} alt="Shoes" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-5xl mt-10 border-b-4 pb-5">Toto Shop</h2>
                    <div className="mt-5">
                        <p className='text-start mt-3'><span className="badge badge-sm bg-info align-middle mr-2"></span>The website is responsive for mobile, tablet and PC.</p>
                        <p className='text-start mt-3'><span className="badge badge-sm bg-info align-middle mr-2"></span>Implemented Login and SignUp form to count user.</p>
                        <p className='text-start mt-3'><span className="badge badge-sm bg-info align-middle mr-2"></span>Implemented admin panel, dashboard and payment gateway.</p>
                        <p className='text-start mt-3'><span className="badge badge-sm bg-info align-middle mr-2"></span>Implemented JWT token to secure the website.</p>
                    </div>
                    <div className="mt-5">
                        <h2 className='text-3xl text-start border-b-2 pb-3 w-1/2'>Technology Used</h2>
                        <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5'>
                            <p className='text-start bg-slate-600 pl-5 p-3 rounded-xl'><span className="badge badge-sm bg-info align-middle mr-2"></span>HTML</p>
                            <p className='text-start bg-slate-600 pl-5 p-3 rounded-xl'><span className="badge badge-sm bg-info align-middle mr-2"></span>CSS</p>
                            <p className='text-start bg-slate-600 pl-5 p-3 rounded-xl'><span className="badge badge-sm bg-info align-middle mr-2"></span>JAVASCRIPT</p>
                            <p className='text-start bg-slate-600 pl-5 p-3 rounded-xl'><span className="badge badge-sm bg-info align-middle mr-2"></span>REACT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeautyShooter;