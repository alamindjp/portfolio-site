import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-primary text-white sticky top-0 z-50 shadow-md'>
            <div className="container navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/project'>Projects</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link className="normal-case text-xl" to='/'>Md Al-Amin Hossain</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li className='hover:bg-bgSemi rounded-lg'><Link to='/home'>Home</Link></li>
                        <li className='hover:bg-bgSemi rounded-lg'><Link to='/about'>About</Link></li>
                        <li className='hover:bg-bgSemi rounded-lg'><Link to='/project'>Projects</Link></li>
                        <li className='hover:bg-bgSemi rounded-lg'><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
       </div>
    );
};

export default Navbar;