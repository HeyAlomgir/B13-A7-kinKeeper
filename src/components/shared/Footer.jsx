import React from 'react';
import FacbookImg from "../../assets/img/facebook.png";
import InstragramImg from "../../assets/img/instagram.png";
import TwiterImg from "../../assets/img/twitter.png"

const Footer = () => {
    return (
        <footer className='bg-[#244d3fFF]'>
            <div className='container mx-auto '>
            <div className='py-10 text-center  space-y-3'>
                <h1 className='text-5xl font-bold text-white'>KeenKeeper</h1>
                <p className='text-gray-300 m-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-2xl font-bold text-white'>Social Links</p>
                <div className='flex  justify-center gap-5'>
                    <img src={InstragramImg} alt="Img" />
                    <img src={FacbookImg} alt="Img" />
                    <img src={TwiterImg} alt="Img" />

                </div>

                 <div className="divider "></div>
            </div>


            <div className='flex flex-col-reverse  text-center md:flex-row justify-between text-gray-400 py-1'>
                
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

                    <div className='flex gap-5 justify-center'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                
            </div>
        </div>
        </footer>
    );
};

export default Footer;