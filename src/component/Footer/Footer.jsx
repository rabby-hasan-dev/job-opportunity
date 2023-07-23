import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer >
            <div className='grid sm:grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4'>
            <div>
                <h1 className='text-xl mb-3'>Job Opportunity</h1>
                <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div>
                    <img src="/src/assets/Icons/Group 9969.png" alt="footer-logo" />

                </div>
              
            </div>
            <div>
                    <h1 className='text-xl mb-3'>Company</h1>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Latest News</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl mb-3'>Product</h1>
                    <ul>
                        <li><a href="#">Prototype</a></li>
                        <li><a href="#">Plans & Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Integrations</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl mb-3'>Support</h1>
                    <ul>
                        <li><a href="#">Help Desk</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Become a Partner</a></li>
                        <li><a href="#">Developers</a></li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-xl mb-3'>Contact</h1>
                    <p>524 Broadway , NYC <br />
                        +1 777 - 978 - 5570</p>
                </div>
                
            </div>
        <div className='flex justify-between mt-32'>
            <p>@2023 CareerHub. All Rights Reserved</p>
            <p>Powered by Job Opportunity </p>
        </div>
        </footer>
    );
};

export default Footer;