import React from 'react'
import ListItem from './ListItem';
import "./SideBar.scss";
import Icons from '../../../assets/icons/index';

export default function SideBar() {
    return (
        <div className="sidebar">
            <header className="header flex column">
                <div>
                    <h1 className="text-black small">Metacare</h1>
                    <p className="x-small">adeyinka@metacare.app</p>
                </div>
            </header>
            <div className="sidebar-items">
                <ListItem icon={Icons.User} text="Admin" />
                <ListItem icon={Icons.Checkmark} text="Knowledge Base" />
                <ListItem icon={Icons.Checkmark} text="Train SAM" />
                <ListItem icon={Icons.BriefCase} text="Agent Inbox" />
                <ListItem icon={Icons.Help} text="Help Center" />
                <ListItem icon={Icons.Analytics} text="Analytics" />
            </div>
        </div>
    )
}
