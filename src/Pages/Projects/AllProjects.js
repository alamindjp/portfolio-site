import React from 'react';
import tvsHouse from '../../Assets/webImage/TvsHouse1.png'
import photoShooter from '../../Assets/webImage/BeautyShooter1.png'
import totoShop from '../../Assets/webImage/TotoShop1.png'
import redSea from '../../Assets/webImage/RedSea1.png'
import Dhoa from '../../Assets/webImage/Dhoa1.png'
import { Link } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const AllProjects = () => {
    return (
        <div className='container min-h-screen mx-auto'>
            <Navbar/>
            <div className='w-2/5 mx-auto rounded-sm border-b-4 border-b-success'><h1 className='text-5xl font-bold text-headingSemi pt-20 pb-5'>Recent Projects</h1></div>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-2 mt-20'>
                <div className="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundImage: `url(${tvsHouse})` }}>
                    <div className="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 className="text-2xl text-center font-bold text-success tracking-wider my-20">Tvs House</h2>
                        <a href='https://tvs-house.firebaseapp.com' className="btn btn-secondary btn-outline hover:btn-secondary" target='_blank' rel="noReferrer">Preview</a>
                        <a href='https://github.com/alamindjp/tvs-house-client' className="btn btn-info btn-outline hover:btn-info ml-2" target='_blank' rel="noReferrer">Source(Client)</a>
                        
                        <div>
                            <Link to='/tvs_house' className="btn btn-secondary btn-outline hover:btn-secondary mt-2">Explore</Link>
                            <a href='https://github.com/alamindjp/tvs-house-server' className="btn btn-info btn-outline hover:btn-info ml-2" target='_blank' rel="noReferrer">Source(server)</a>
                        </div>
                    </div>
                </div>
                <div className="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-fit" style={{ backgroundImage: `url(${photoShooter})` }}>
                    <div className="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 className="text-2xl text-center font-bold text-success tracking-wider my-20">Beauty Shooter</h2>
                        <a href='#d' target='-blank' rel='noRefaces' className="btn btn-secondary btn-outline hover:btn-secondary mr-5" >Preview</a>
                        <a href='#dd' target='-blank' rel='noRefaces' className="btn btn-info btn-outline hover:btn-info">Source</a>
                        <div><Link to='/beauty_shooter' className="btn btn-secondary btn-outline hover:btn-secondary mt-2">Explore</Link></div>
                    </div>
                </div>
                <div className="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${totoShop})` }}>
                    <div className="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 className="text-2xl text-center font-bold text-success tracking-wider my-20">Toto Shop</h2>
                        <a href='dj' className="btn btn-secondary btn-outline hover:btn-secondary mr-5" target='_blank'>Preview</a>
                        <a href='https://github.com/alamindjp/photographer' className="btn btn-info btn-outline hover:btn-info" target='_blank' rel="noReferrer">Source</a>
                        <div><Link to='/toto_shop' className="btn btn-secondary btn-outline hover:btn-secondary mt-2">Explore</Link></div>
                    </div>
                </div>
                <div className="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundImage: `url(${redSea})` }}>
                    <div className="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 className="text-2xl text-center font-bold text-success tracking-wider my-20">Red Sea</h2>
                        <a href='https://redsea-ltd.web.app' className="btn btn-secondary btn-outline hover:btn-secondary" target='_blank' rel="noReferrer">Preview</a>
                        <a href='https://github.com/alamindjp/redsea-client' className="btn btn-info btn-outline hover:btn-info ml-2" target='_blank' rel="noReferrer">Source(Client)</a>

                        <div>
                            <Link to='/red-sea' className="btn btn-secondary btn-outline hover:btn-secondary mt-2">Explore</Link>
                            <a href='https://github.com/alamindjp/redsea-server' className="btn btn-info btn-outline hover:btn-info ml-2" target='_blank' rel="noReferrer">Source(server)</a>
                        </div>
                    </div>
                </div>
                <div className="w-[200px] sm:w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${Dhoa})` }}>
                    <div className="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 className="text-2xl text-center font-bold text-success tracking-wider my-20">Dhoa Party Center</h2>
                        <a href='dj' className="btn btn-secondary btn-outline hover:btn-secondary mr-5" target='_blank'>Preview</a>
                        <a href='dj' className="btn btn-info btn-outline hover:btn-info" target='_blank'>Source</a>
                        <div><Link to='/dhoa_party_center' className="btn btn-secondary btn-outline hover:btn-secondary mt-2">Explore</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;