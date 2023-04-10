import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h1>Job Opportunity </h1>
            <div>
                <Link to="/" >Home</Link>
                <Link to="/statistic" >Statistics</Link>
                <Link to="/job" >Applied Jobs</Link>
                <Link to="/blog" >Blog</Link>
            </div>
            <button >Start Applying</button>
        </nav>
    );
};

export default Header;