import React from 'react'
import "./Dashboard.css"
import Ticket from '../Ticket/Ticket'
import List from '../List/List'

function Dashboard() {
    let demoTicket = {
        "id": "CAM-1",
        "title": "Update User Profile Page UI",
        "tag": [
            "Feature request"
        ],
        "userId": "usr-1",
        "status": "Todo",
        "priority": 4
    }
    let ticketList = [demoTicket, demoTicket, demoTicket]
  return (
    <div className='dashboard-main'>
        Dashboard
        {/* <Ticket ticket = {demoTicket}/> */}
        <List ticketList={ticketList} />
    </div>
  )
}

export default Dashboard