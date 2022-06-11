import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import dhoa1 from '../Assets/webImage/Dhoa1.png'
import dhoa2 from '../Assets/webImage/Dhoa2.png'
import dhoa3 from '../Assets/webImage/Dhoa3.png'
import dhoa4 from '../Assets/webImage/Dhoa1.png'

const DhoaPartyCenter = () => {
    return (
        <div>
            <Navbar />
            <h2 className="text-5xl mt-10 pb-5 shadow-lg">Site Details</h2>
            <div className="container mx-auto card mt-20">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <figure><img className='card opacity-90' src={dhoa1} alt="Shoes" /></figure>
                    <figure><img className='card opacity-90' src={dhoa2} alt="Shoes" /></figure>
                    <figure><img className='card opacity-90' src={dhoa3} alt="Shoes" /></figure>
                    <figure><img className='card opacity-90' src={dhoa4} alt="Shoes" /></figure>
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

export default DhoaPartyCenter;