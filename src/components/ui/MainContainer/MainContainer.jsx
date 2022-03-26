import React from 'react'
import NavBar from '../NavBar/NavBar';
import "./MainContainer.scss";
import Tabs from './Tabs';

function MainContainer() {
    return (
        <div className="main-container">
            <NavBar />
            <div className="content">
            <Tabs />
            </div>
        </div>
    )
}

export default MainContainer
