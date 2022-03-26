import React from 'react'
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import SelectInput from '../SelectInput/SelectInput';
import "./MainContainer.scss";
import Tabs from './Tabs';

function MainContainer() {
    return (
        <div className="main-container">
            <NavBar />
            <div className="content">
                <Tabs />
                <div className="header flex">
                    <h3 className="title">Efficiency Analytics</h3>
                    <div className="flex">
                        <Search />
                        <div className="flex">
                            <SelectInput />
                            <div className="vertical-line-container">
                                <div className="vertical-line"></div>
                            </div>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContainer
