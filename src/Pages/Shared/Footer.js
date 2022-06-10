import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="footer footer-center p-5 rounded text-textSemi border-t-4 border-indigo-500">
                <div>
                <p>Copyright © {year} - All right reserved by Md Al-Amin Hossain</p>
                </div>
            </footer>
    );
};

export default Footer;