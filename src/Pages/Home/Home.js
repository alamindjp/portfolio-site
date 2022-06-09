import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const Home = () => {
    return (
        <div id='home'>
            <Navbar />
            <Banner />
            <About/>
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;