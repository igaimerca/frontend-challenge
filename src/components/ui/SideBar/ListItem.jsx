import React from 'react'
import Icons from '../../../assets/icons'

function ListItem({ icon, text, children, active, changeActiveItem }) {
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
                    {Icons.ChevronRight}
                </span>
            </div>
            <div className="flex">
                {children}
            </div>
        </div>
    )
}

export default ListItem