import React from 'react';
import AboutImage from "../../../Assets/Image/About-Image.jpg"

const AboutMe = () => {
    return (
        <div id='about' className='w-4/5 mx-auto mt-36'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={AboutImage} className="max-w-sm rounded-lg shadow-2xl w-[200px] sm:w-full" alt='img' />
                    <div className='w-2/3 md:pl-20'>
                        <h1 className="text-5xl font-bold text-info">About Me</h1>
                        <p className="py-6 text-justify">I am a junior front-end web developer with proficiency in front-end technologies like React, JavaScript, HTML, and CSS and familiarity with back-end technologies such as NodeJS and ExpressJS.</p>
                        <a href='/#contact' className="btn btn-secondary hover:btn-secondary btn-outline">Hire Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;