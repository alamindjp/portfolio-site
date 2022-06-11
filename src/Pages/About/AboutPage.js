import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage from "../../Assets/Image/Profile-Image.jpg"
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const AboutPage = () => {
    return (
        <>
            <Navbar />
            <h1 className="text-5xl font-bold text-error mt-10">About Me</h1>
            <div id='about' className='w-4/5 min-h-screen mx-auto mt-20 my-auto'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={AboutImage} className="max-w-sm rounded-lg shadow-2xl w-[200px] sm:w-full" alt='img' />
                        <div className='w-2/3 md:pl-20'>
                            <p className="py-6 text-justify">I am a junior front-end web developer with proficiency in front-end technologies like React, JavaScript, HTML, and CSS and familiarity with back-end technologies such as NodeJS and ExpressJS.</p>
                            <Link to='/contact' className="btn btn-secondary hover:btn-secondary btn-outline">Hire Me</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;