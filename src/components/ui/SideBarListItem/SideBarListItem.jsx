import React from 'react'
import Icons from '../../../assets/icons';

import "./SideBarListItem.scss";

function SideBarListItem({ icon, text, children, active }) {
    return (
        <div className={`sidebar-item ${active ? 'active' : ''}`}>
            <div className="flex small link-hover">
                <div className="flex">
                    <span className="icon">
                        {icon}
                    </span>
                    <span className="item-name">{text}</span>
                </div>
                <span>
                    {active ? Icons.ChevronDown : Icons.ChevronRight}
                </span>
            </div>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}

export default SideBarListItem