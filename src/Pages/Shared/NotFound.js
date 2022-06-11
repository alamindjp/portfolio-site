import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/Image/404.png'

const NotFound = () => {
    return (
        <div className='min-h-screen bg-center' style={{ backgroundImage: `url(${img})`, backgroundRepeat: 'no-repeat' }}>
            <div>
                <Link to="/" className="shadow-lg bg-secondary py-3 text-lg absolute inset-x-0 top-0">Go To Home</Link>
                <h1 className='text-8xl text-slate-200 pb-8 pt-20'>Page Not Found</h1>
                <h1 className='text-8xl text-red-500 mt-96 font-bold border-t-8 border-red-200'>Error</h1>
            </div>
        </div>
    );
};

export default NotFound;