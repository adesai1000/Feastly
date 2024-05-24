import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-chick-red text-white py-4 md:py-6 lg:py-2 px-6 md:px-10 lg:px-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center justify-center md:justify-start md:mb-0">
                    <Image src="/Chick-fill-A-Logo-White.png" alt="Chick-Fil-A Logo" height={150} width={150} />
                    <p className="text-sm md:text-base mt-5 ml-5">© All Rights Reserved by CFA Properties, Inc.</p>
                </div>
                <nav className="text-sm md:text-base">
                    <ul className="flex space-x-6 md:ml-5 md:mt-5">
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
