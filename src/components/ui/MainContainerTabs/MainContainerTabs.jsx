import React from "react";
import "./MainContainerTabs.scss";

function MainContainerTabs({ activeTab, changeTab }) {
    return (
        <div className="tabs-container flex small">
            <span className={`${activeTab == "efficiency" && "active"} hover flex`}
                onClick={() => changeTab('efficiency')}
            >
                Efficiency
            </span>
            <span
                className={`${activeTab == "volume" && "active"} hover flex`}
                onClick={() => changeTab('volume')}
            >
                Volume
            </span>
            <span className={`${activeTab == "customer" && "active"} hover flex`}
                onClick={() => changeTab('customer')}
            >
                Customer Satisfication
            </span>
            <span className={`${activeTab == "backlog" && "active"} hover flex`}
                onClick={() => changeTab('backlog')}
            >
                Backlog
            </span>
        </div>
    );
}

export default MainContainerTabs;
