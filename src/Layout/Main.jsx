import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <>
           <Header></Header>
           <Outlet></Outlet> 
           <Footer></Footer>
        </>
    );
};

export default Main;