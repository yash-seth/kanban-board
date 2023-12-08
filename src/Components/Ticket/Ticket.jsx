import React from 'react'
import "./Ticket.css"

function Ticket({ticket}) {
  return (
    <div className='ticket-main'>
        <div className='ticket-header'>
            <div className='ticket-id'>{ticket.id}</div>
            {/* <div className='ticket-owner-pfp'>pfp</div> */}
        </div>
        <div className='ticket-content'>
            <div className='ticket-title'><b>{ticket.title}</b></div>
        </div>
        <div className='ticket-metadata'>
            <div className='ticket-tags'>
            {ticket.tag.map((tag) => {
                return (<div className='ticket-tag'>{tag}</div>)
            })}
            </div>
        </div>
    </div>
  )
}

export default Ticket

/* "id": "CAM-1",
"title": "Update User Profile Page UI",
"tag": [
    "Feature request"
],
"userId": "usr-1",
"status": "Todo",
"priority": 4 */