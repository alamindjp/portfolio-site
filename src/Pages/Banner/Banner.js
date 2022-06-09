import React from 'react';
import ProfileImage from '../../Assets/Image/Profile-Image.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="w-50 mask mask-squircle">
                <img src={ProfileImage} className="max-w-sm rounded-lg shadow-2xl" alt='Pic' />
                </div>
                <div className='md:pr-20'>
                    <h4 className="text-2xl font-bold">Hello There !</h4>
                    <h2 className="text-5xl font-bold text-start mt-3">I'm Al-Amin Hossain</h2>
                    <h3 className="text-3xl font-bold text-start my-5">I'm <span>Front End Web Developer</span></h3>
                    
                    <a href='https://drive.google.com/file/d/1g41tRSGYCD2KFMFV-wj1kTXdt9Vfrhz_/view?usp=sharing' className="btn btn-primary text-white mt-10" target="_blank" rel="noreferrer" >Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;