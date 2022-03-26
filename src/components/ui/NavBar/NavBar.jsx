import React from 'react'
import Icons from '../../../assets/icons';
import "./NavBar.scss";

function NavBar() {
    return (
        <div className="navbar flex">
            <div className="search-container">
                <div className="search flex">
                    <input type="text" className="small" placeholder="Ask us any question" />
                    {Icons.Search}
                </div>
            </div>
            <div className="profile-container flex">
                <div className="inner flex">
                    <div className="left flex cursor-pointer">
                        {Icons.Notifications}
                        <span className="badge-span text-white text-center x-small">3</span>
                    </div>
                    <div className="vertical-line-container flex">
                        <div className="vertical-line"></div>
                    </div>
                    <div className="right flex cursor-pointer">
                        <div className="profile-picture"></div>
                        {Icons.ChevronDown}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
