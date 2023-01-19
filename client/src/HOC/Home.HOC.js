import React, { Component } from 'react';
import {  Routes, Route } from "react-router-dom";
//Layout
import HomeLayout from "../Layout/Home.layout"

const HomeLayoutHOC = ({component: Component, ...rest}) => { 
    return (
        <>
                <HomeLayout>
                    <Component {...rest} />
                </HomeLayout>
           
        
        </>
    );
    };

    export default HomeLayoutHOC;