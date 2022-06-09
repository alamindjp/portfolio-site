import React from 'react';
import ProfileImage from '../../Assets/Image/Profile-Image.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen w-4/5 mx-auto mt-10">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="mask mask-squircle">
                <img src={ProfileImage} className="max-w-sm rounded-lg shadow-2xl w-[200px] sm:w-full" alt='Pic' />
                </div>
                <div className='md:pr-10 lg:pr-32'>
                    <h4 className="text-2xl font-bold">Hello There !</h4>
                    <h2 className="text-5xl font-bold md:text-start mt-3">I'm Al-Amin Hossain</h2>
                    <h3 className="text-3xl font-bold md:text-start my-5">I'm <span>Front End Web Developer</span></h3>
                    
                    <a href='https://drive.google.com/file/d/1g41tRSGYCD2KFMFV-wj1kTXdt9Vfrhz_/view?usp=sharing' className="btn btn-primary text-white mt-10" target="_blank" rel="noReferrer" >Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;