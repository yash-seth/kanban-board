import React from 'react'
import "./Ticket.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Ticket({ticket}) {
  return (
    <div className='ticket-main'>
        <div className='ticket-header'>
            <div className='ticket-id'>{ticket.id}</div>
            <AccountCircleIcon color="disabled"/>
        </div>
        <div className='ticket-content'>
            <div className='ticket-title'><b>{ticket.title}</b></div>
        </div>
        <div className='ticket-metadata'>
            <div className='ticket-tags'>
            {ticket.tag.map((tag, key) => {
                return (
                        <div key={key} className='ticket-tag'>
                            <FiberManualRecordIcon color="disabled" sx={{ fontSize: "12px" }}/>
                            <div>
                                {tag}
                            </div>
                        </div>
                    )
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