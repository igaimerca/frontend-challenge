import React from 'react'
import Icons from '../../../assets/icons'
function ListItem({ icon, text }) {
    return (
        <div className="sidebar-item flex small link-hover">
            <div className="flex">
                <span className="icon">
                    {icon}
                </span>
                <span className="item-name">{text}</span>
            </div>
            <span>
                {Icons.ChevronRight}
            </span>
        </div>
    )
}

export default ListItem