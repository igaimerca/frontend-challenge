import React from 'react'
import MainContainer from '../../sections/MainContainer/MainContainer'
import SideBar from '../../sections/SideBar/SideBar'
import "./Analytics.scss"

function Analytics() {
  return (
    <div className="flex start analytics">
        <SideBar />
        <MainContainer />
    </div>
  )
}

export default Analytics