import React from 'react';
import tvsHouse from '../../Assets/Image/tvsHouse.png'
import photoShooter from '../../Assets/Image/photoShooter.png'
import totoShop from '../../Assets/Image/totoShop.png'

const Projects = () => {
    return (
        <>
            <h1 className='text-5xl font-bold mt-36 text-headingSemi'>Recent Projects</h1>
            <div className='container mx-auto flex justify-center mt-20'>
                <div class="w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundImage: `url(${tvsHouse})` }}>
                    <div class="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 class="text-2xl text-center font-bold text-success tracking-wider my-20">TVS HOUSE</h2>
                        <button class="btn btn-secondary btn-outline hover:btn-secondary mr-5">Preview</button>
                        <button class="btn btn-info btn-outline hover:btn-info">Source</button>
                    </div>
                </div>
                <div class="w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundImage: `url(${photoShooter})` }}>
                    <div class="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 class="text-2xl text-center font-bold text-success tracking-wider my-20">TVS HOUSE</h2>
                        <button class="btn btn-secondary btn-outline hover:btn-secondary mr-5">Preview</button>
                        <button class="btn btn-info btn-outline hover:btn-info">Source</button>
                    </div>
                </div>
                <div class="w-[400px] shadow-lg shadow-dark group container rounded-lg flex justify-center items-center mx-auto content-div bg-cover" style={{ backgroundRepeat: 'no-repeat', backgroundImage: `url(${totoShop})` }}>
                    <div class="w-full bg-bgSemi opacity-0 group-hover:opacity-100 hover:rounded-lg py-10 transition duration-1000 ">
                        <h2 class="text-2xl text-center font-bold text-success tracking-wider my-20">TVS HOUSE</h2>
                        <button class="btn btn-secondary btn-outline hover:btn-secondary mr-5">Preview</button>
                        <button class="btn btn-info btn-outline hover:btn-info">Source</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;