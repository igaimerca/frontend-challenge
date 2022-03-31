import React from 'react'
import MainContainer from '../../components/ui/MainContainer/MainContainer'
import SideBar from '../../components/ui/SideBar/SideBar'
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