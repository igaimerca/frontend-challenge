import React from 'react'

function Tabs() {
  return (
    <div className="tabs-container flex small">
        <span className="active flex">Efficiency</span>
        <span className="flex">Volume</span>
        <span className="flex">Customer Satisfication</span>
        <span className="flex">Backlog</span>
    </div>
  )
}

export default Tabs