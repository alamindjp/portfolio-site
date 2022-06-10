import React from 'react';
import tvsHouse from '../../../Assets/webImage/TvsHouse1.png'
import photoShooter from '../../../Assets/webImage/BeautyShooter1.png'
import totoShop from '../../../Assets/webImage/TotoShop1.png'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <>
            <h1 className='text-5xl font-bold mt-36 text-headingSemi'>Recent Projects</h1>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center mt-20'>
                <div class="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundImage: `url(${tvsHouse})` }}>
                    <div class="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 class="text-2xl text-center font-bold text-success tracking-wider my-20">TVS HOUSE</h2>
                        <a href='https://tvs-house.firebaseapp.com' class="btn btn-secondary btn-outline hover:btn-secondary mr-5" target='_blank' rel="noReferrer">Preview</a>
                        <Link to='/tvs_house' class="btn btn-info btn-outline hover:btn-info">Explore</Link>
                    </div>
                </div>
                <div class="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundImage: `url(${photoShooter})` }}>
                    <div class="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 class="text-2xl text-center font-bold text-success tracking-wider my-20">Photo Shooter</h2>
                        <a href='https://photographer-7f389.web.app/' class="btn btn-secondary btn-outline hover:btn-secondary mr-5" target='_blank' rel="noReferrer">Preview</a>
                        <Link to='/beauty_shooter' class="btn btn-info btn-outline hover:btn-info">Explore</Link>
                    </div>
                </div>
                <div class="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${totoShop})` }}>
                    <div class="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 class="text-2xl text-center font-bold text-success tracking-wider my-20">Toto Shop</h2>
                        <a href='https://meek-dasik-00de9a.netlify.app/' class="btn btn-secondary btn-outline hover:btn-secondary mr-5" target='_blank' rel="noReferrer">Preview</a>
                        <Link to='/toto_shop' class="btn btn-info btn-outline hover:btn-info">Explore</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;