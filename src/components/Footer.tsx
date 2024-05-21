import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-chick-red text-white py-8 md:py-12 lg:py-16 px-6 md:px-10 lg:px-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0">
                    <img src="/Chick-fill-A-Logo-White.png" alt="Chick-Fil-A Logo" className="w-28 md:w-24 mr-4" />
                    <p className="text-sm md:text-base">© All Rights Reserved by CFA Properties, Inc.</p>
                </div>
                <nav className="text-sm md:text-base">
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                        <li><a href="#" className="hover:text-gray-300">Menu</a></li>
                        <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
