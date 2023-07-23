import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {


    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/statistic" >Statistics</Link></li>
        <li><Link to="/job" >Applied Jobs</Link></li>
        <li>  <Link to="/blog" >Blog</Link></li>

    </>

    // fixed z-10 bg-opacity-30
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar  bg-opacity-30 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navOptions}

                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl">Job Opportunity</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}


                    </ul>
                </div>
                <div className="navbar-end">

                    <button className='btn text-white' >Start Applying</button>

                </div>
            </div>

        </div>

    );
};

export default Header;