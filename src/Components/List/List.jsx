import React from 'react'
import Ticket from '../Ticket/Ticket'

function List({ticketList}) {
  return (
    <div className='list-main'>
      {ticketList.map((ticket, key) => {
        return <Ticket key={key} ticket={ticket} />
      })}
    </div>
  )
}

export default List