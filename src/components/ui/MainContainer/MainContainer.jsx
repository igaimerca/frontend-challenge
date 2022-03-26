import React from 'react'
import AnalyticsCard from '../AnalyticsCard/AnalyticsCard';
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import SelectInput from '../SelectInput/SelectInput';
import "./MainContainer.scss";
import Tabs from './Tabs';

function MainContainer() {
    
    // Hardcoded chart data
    let data = [
        {
            title: "Average response Time",
            data: [10, 41, 35, 51, 49, 62, 69, 91],
            mainColor: "#F05D23",
        },
        {
            title: "Replies per resolution",
            data: [10, 41, 35, 51, 49, 62, 69, 91],
            mainColor: "#3E68FF",
        },
        {
            title: "Average resolution time",
            data: [10, 41, 35, 51, 49, 62, 69, 91],
            mainColor: "#07C9E2",
        }]

    return (
        <div className="main-container">
            <NavBar />
            <div className="content">
                <Tabs />
                <div className="header flex">
                    <h2 className="title">Efficiency Analytics</h2>
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
                <div className="analytics-cards">
                    {data && data.map((content) => (
                        <AnalyticsCard chartData={content} />
                    ))}
                </div>
            </div>
        </div>

    )
}

export default MainContainer
