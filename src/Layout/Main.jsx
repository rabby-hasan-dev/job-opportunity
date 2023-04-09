import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';

const Main = () => {
    return (
        <>
           <Header></Header>
           <Outlet></Outlet> 
        </>
    );
};

export default Main;