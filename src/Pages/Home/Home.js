import React from 'react';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';
import AboutMe from './Components/AboutMe';
import Banner from './Components/Banner';
import ContactMe from './Components/ContactMe';
import Projects from './Components/Projects';

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Banner />
            <AboutMe />
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    );
};

export default Home;