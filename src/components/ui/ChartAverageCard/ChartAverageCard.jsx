import React from 'react'
import "./ChartAverageCard.scss";

function ChartAverageCard({title, time}) {
    return (
        <div className="chart-average-card flex">
            <div className="content flex column">
                <p>{title}</p>
                <b className="text-black x-large">{time}</b>
            </div>
        </div>
    )
}

export default ChartAverageCard
