import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
            <footer className="footer footer-center p-10 text-base-content rounded">
                <div>
                <p>Copyright © {year} - All right reserved by Md Al-Amin Hossain</p>
                </div>
            </footer>
    );
};

export default Footer;