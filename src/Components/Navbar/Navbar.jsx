import React from 'react'
import "./Navbar.css"

function Navbar({setGrouping, setOrdering}) {

  return (
    <div className='navbar-main'>
        <label htmlFor="grouping">Grouping</label>

        <select name="grouping" id="grouping" onChange={e => setGrouping(e.target.value)}>
          <option value="Status">Status</option>
          <option value="User">Users</option>
          <option value="Priority">Priority</option>
        </select>
        
        <label htmlFor="ordering">Ordering</label>

        <select name="ordering" id="ordering" onChange={e => setOrdering(e.target.value)}>
          <option value="Title">Title</option>
          <option value="Priority">Priority</option>
        </select>
    </div>
  )
}

export default Navbar