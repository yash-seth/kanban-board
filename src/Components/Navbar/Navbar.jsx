import React from 'react'
import "./Navbar.css"

function Navbar({setGrouping, setOrdering}) {

  return (
    <div className='navbar-main'>
        <label for="grouping">Grouping</label>

        <select name="grouping" id="grouping" onChange={e => setGrouping(e.target.value)}>
          <option value="User">Users</option>
          <option value="Status">Status</option>
          <option value="Priority">Priority</option>
        </select>
        <label for="Ordering">Ordering</label>

        <select name="ordering" id="ordering">
          <option value="Users">Title</option>
          <option value="Status">Priority</option>
        </select>
    </div>
  )
}

export default Navbar