import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-white flex flex-col p-10">
            <div className='text-center mt-10'>
                <h1 className='font-bold text-3xl my-2'>Gadget Heaven</h1>
                <p className=''>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className='my-6 border border-[#5d343481]' />
            <div className='flex justify-evenly'>
                <nav className='text-center'>
                    <h6 className="footer-title text-black font-bold text-lg">Services</h6>
                    <div className='flex flex-col gap-4'>
                        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Product Support</a>
                        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Order Tracking</a>
                        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Shipping & Delivery</a>
                        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Returns</a>
                    </div>
                </nav>
                <nav className='text-center'>
                        <h6 className="footer-title text-black font-bold text-lg">Company</h6>
                        <div className='flex flex-col gap-4'>
                            <a className="link link-hover text-[rgba(9,8,15,0.6)]">About us</a>
                            <a className="link link-hover text-[rgba(9,8,15,0.6)]">Careers</a>
                            <a className="link link-hover text-[rgba(9,8,15,0.6)]">Contact</a>
                        </div>
                </nav>
                <nav className='text-center'>
                    <h6 className="footer-title text-black font-bold text-lg">Legal</h6>
                    <div className='flex flex-col gap-4'>
                        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Terms of use</a>
                        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Privacy policy</a>
                        <a className="link link-hover text-[rgba(9,8,15,0.6)]">Cookie policy</a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;