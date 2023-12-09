import React from 'react'
import "./Ticket.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import EmailIcon from '@mui/icons-material/Email';

function Ticket({ticket}) {
  return (
    <div className='ticket-main'>
        <div className='ticket-header'>
            <div className='ticket-id'>{ticket.id}</div>
            <AccountCircleIcon color="disabled"/>
        </div>
        <div className='ticket-content'>
            <div className='ticket-content-title'>
                <CheckCircleOutlineIcon sx={{ fontSize: "16px", color: '#5D3FD3' }} />
                <div className='ticket-title'><b>{ticket.title}</b></div>
            </div>
        </div>
        <div className='ticket-metadata'>
            <div className='ticket-tags'>
            <div className="ticket-tag"><EmailIcon sx={{fontSize: "12px", color: '#535353'}}/></div>
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

// Dummy ticket
/* "id": "CAM-1",
"title": "Update User Profile Page UI",
"tag": [
    "Feature request"
],
"userId": "usr-1",
"status": "Todo",
"priority": 4 */