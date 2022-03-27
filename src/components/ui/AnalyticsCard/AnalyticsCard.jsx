import React from 'react'
import "./AnalyticsCard.scss";
import LineChart from './LineChart';

function AnalyticsTab({chartData}) {
    return (
        <div className="analytics-card">
            <div className="flex">
                <div className="flex">

            <h4 className="text-black text-bold">{chartData.title}</h4>
            <span className="percent">4.14%</span>
                </div>
                <div className="flex">
                    <span className="color-rect" style={{ backgroundColor: chartData.mainColor }}></span>
                    <span>High Priority</span>
                </div>
            </div>
            <LineChart data={chartData.data} mainColor={chartData.mainColor} title={chartData.title} />
        </div>
    )
}

export default AnalyticsTab
