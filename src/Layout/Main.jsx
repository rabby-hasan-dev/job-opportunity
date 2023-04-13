import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <>
         <div className="header">
         <Header></Header>
           <Outlet></Outlet> 
         </div>
           <Footer></Footer>
        </>
    );
};

export default Main;