import React from 'react'
import "./AnalyticsCard.scss";
import LineChart from './LineChart';
import Icons from "../../../assets/icons/index";
import ChartAverageCard from "../ChartAverageCard/ChartAverageCard";

function AnalyticsTab({ chartData }) {
    return (
        <div className="analytics-card flex">
            <div className="left">
                <div className="flex header">
                    <div className="flex">
                        <h4 className="text-black text-bold">{chartData.title}</h4>
                        <span className="percent">4.14%</span>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <span className="color-rect" style={{ backgroundColor: chartData.mainColor }}></span>
                            <span className="text-black">High Priority</span>
                        </div>
                        <div className="vertical-line-container">
                            <div className="vertical-line"></div>
                        </div>
                        <button className="flex btn" id='filter-btn'>
                            <span>This Month</span>
                            {Icons.BriefCase}
                        </button>
                    </div>
                </div>
                <LineChart data={chartData.data} mainColor={chartData.mainColor} title={chartData.title} />
            </div>
            <div className="right">
                {chartData.statistics && chartData.statistics.map((statistic) => (
                    <ChartAverageCard title={statistic.title} time={statistic.time} />
                ))}
            </div>
        </div>
    )
}

export default AnalyticsTab
