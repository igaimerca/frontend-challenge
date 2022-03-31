import React from 'react'
import Icons from '../../../assets/icons'

function ListItem({ icon, text, chidren }) {
    return (
        <div className="sidebar-item">
            <div className="flex small link-hover">
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
            <div className="flex">
                {chidren}
            </div>
        </div>
    )
}

export default ListItem