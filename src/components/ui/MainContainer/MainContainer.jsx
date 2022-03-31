import React, { useState } from 'react'
import AnalyticsCard from '../AnalyticsCard/AnalyticsCard';
import Button from '../Button/Button';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import SelectInput from '../SelectInput/SelectInput';
import "./MainContainer.scss";
import Tabs from './Tabs';

function MainContainer() {

    let [activeTab, setActiveTab] = useState("efficiency");

    // Hardcoded chart data
    let data = [
        {
            title: "Average response Time",
            data: [12, 26, 20, 32, 18, 30, 41, 26],
            mainColor: "#F05D23",
            statistics: [
                {
                    title: "Average response Time",
                    time: "30 Mins"
                }, {
                    title: "Response Time",
                    time: "1 Hour 30 Mins"
                }
            ]
        },
        {
            title: "Replies per resolution",
            data: [12, 26, 20, 32, 18, 30, 41, 26],
            mainColor: "#3E68FF",
            statistics: [
                {
                    title: "Average Replies",
                    time: "30 Mins"
                }, {
                    title: "Response Time",
                    time: "1 Hour 30 Mins"
                }
            ]
        },
        {
            title: "Average resolution time",
            data: [12, 26, 20, 32, 18, 30, 41, 26],
            mainColor: "#FB6491",
            statistics: [{
                title: "Average Resolution Rate",
                time: "30 Mins"
            }, {
                title: "Response Time",
                time: "1 Hour 30 Mins"
            }]
            ,
        }, {
            title: "First contact resolution rate",
            data: [12, 26, 20, 32, 18, 30, 41, 26],
            mainColor: "#07C9E2",
            statistics: [{
                title: "Average Contact Rate",
                time: "30 Mins"
            }, {
                title: "Response Time",
                time: "1 Hour 30 Mins"
            }]

        }]

    let filterOptions = [
        { value: 'Option1', label: 'Option1' },
        { value: 'Option2', label: 'Option2' },
        { value: 'Option3', label: 'Option3' },
    ]

    return (
        <div className="main-container">
            <NavBar />
            <Tabs activeTab={activeTab} changeTab={(tab) => setActiveTab(tab)} />
            {activeTab == "efficiency" ? (
                <div className="content">
                    <div className="header flex">
                        <h2 className="title">Efficiency Analytics</h2>
                        <div className="flex">
                            <Search />
                            <div className="flex">
                                <SelectInput options={filterOptions} placeholder="Filter Options" />
                                <div className="vertical-line-container">
                                    <div className="vertical-line"></div>
                                </div>
                                <Button text="Export" />
                            </div>
                        </div>
                    </div>
                    <div className="analytics-cards">
                        {data && data.map((content) => (
                            <AnalyticsCard chartData={content} />
                        ))}
                    </div>
                </div>
            ) : (<></>)}
        </div>

    )
}

export default MainContainer
