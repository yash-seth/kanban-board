import React from 'react'
import "./Navbar.css"

function Navbar({setGrouping, setOrdering}) {
  let groupingOptions = ['Status', 'User', 'Priority']
  let orderingOptions = ['Title', 'Priority']

  return (
    <div className='navbar-main'>
        <label htmlFor="grouping">Grouping</label>

        <select name="grouping" id="grouping" onChange={e => {localStorage.setItem("grouping", e.target.value);setGrouping(e.target.value)}}>
          {localStorage.getItem('grouping') && <option>{localStorage.getItem('grouping')}</option>}
          {groupingOptions.map((group, key) => {
            return localStorage.getItem('grouping') !== group && <option key={key} value={group}>{group}</option>
          })}
        </select>
        
        <label htmlFor="ordering">Ordering</label>

        <select name="ordering" id="ordering" onChange={e => {localStorage.setItem("ordering", e.target.value );setOrdering(e.target.value)}}>
          {/* <option value="Title">Title</option>
          <option value="Priority">Priority</option> */}
          {localStorage.getItem('ordering') && <option>{localStorage.getItem('ordering')}</option>}
          {orderingOptions.map((order, key) => {
            return localStorage.getItem('ordering') !== order && <option key={key} value={order}>{order}</option>
          })}
        </select>
    </div>
  )
}

export default Navbar