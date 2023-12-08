import React from 'react'
import Ticket from '../Ticket/Ticket'

function List({ticketList}) {
  return (
    <div className='list-main'>
      {ticketList.map((ticket) => {
        return <Ticket ticket={ticket} />
      })}
    </div>
  )
}

export default List