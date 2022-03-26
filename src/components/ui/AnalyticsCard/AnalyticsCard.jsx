import React from 'react'
import "./AnalyticsCard.scss";
import LineChart from './LineChart';

function AnalyticsTab({chartData}) {
    return (
        <div className="analytics-card">
            <span className="text-black text-bold">{chartData.title}</span>
            <span>4.14%</span>
            <LineChart data={chartData.data} mainColor={chartData.mainColor} title={chartData.title} />
        </div>
    )
}

export default AnalyticsTab
