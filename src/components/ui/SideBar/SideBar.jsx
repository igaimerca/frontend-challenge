import React, { useState } from 'react'
import ListItem from './ListItem';
import "./SideBar.scss";
import Icons from '../../../assets/icons/index';

export default function SideBar() {
    let [activeItem, setActiveItem] = useState(null);
    let [activeChildItem, setActiveChildItem] = useState(null);
    return (
        <div className="sidebar">
            <header className="header flex column">
                <div>
                    <h1 className="text-black small">Metacare</h1>
                    <p className="x-small">adeyinka@metacare.app</p>
                </div>
            </header>
            <div className="sidebar-items">
                <div onClick={() => setActiveItem('admin')}>
                    <ListItem
                        icon={Icons.User}
                        text="Admin"
                        active={activeItem === 'admin' && true}
                    />
                </div>
                <div onClick={() => setActiveItem('knowledge')}>
                    <ListItem
                        icon={Icons.Checkmark}
                        text="Knowledge Base"
                        active={activeItem === 'knowledge' && true}
                    />
                </div>
                <div onClick={() => setActiveItem('train')}>
                    <ListItem
                        icon={Icons.Checkmark}
                        text="Train SAM"
                        active={activeItem === 'train' && true}
                    />
                </div>
                <div onClick={() => setActiveItem('agent')}>
                    <ListItem
                        icon={Icons.BriefCase}
                        text="Agent Inbox"
                        active={activeItem === 'agent' && true}
                    />
                </div>
                <div onClick={() => setActiveItem('help')}>
                    <ListItem
                        icon={Icons.Help}
                        text="Help Center"
                        active={activeItem === 'help' && true}
                    />
                </div>
                <div onClick={() => setActiveItem(activeItem === 'analytics' ? null : 'analytics')}>
                    <ListItem
                        icon={Icons.Analytics}
                        active={activeItem === 'analytics' && true}
                        text="Analytics">
                        {activeItem === 'analytics' && (
                            <div className="flex column child-list-items">
                                <ul>
                                    <li
                                        onClick={() => setActiveChildItem('teams')}
                                        className={`${activeChildItem === 'teams' && 'active-child-item'}`}>Teams</li>
                                    <li
                                        onClick={() => setActiveChildItem('knowledge')}
                                        className={`${activeChildItem === 'knowledge' && 'active-child-item'}`}>Knowledge Base</li>
                                    <li
                                        onClick={() => setActiveChildItem('training')}
                                        className={`${activeChildItem === 'training' && 'active-child-item'}`}>Training SAM</li>
                                    <li
                                        onClick={() => setActiveChildItem('help')}
                                        className={`${activeChildItem === 'help' && 'active-child-item'}`}>Help Center</li>
                                </ul>
                            </div>
                        )}
                    </ListItem>
                </div>
            </div>
        </div>
    )
}
