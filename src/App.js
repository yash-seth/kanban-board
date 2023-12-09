import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import {useEffect, useState} from 'react'

function App() {
  const [grouping, setGrouping] = useState(localStorage.getItem( 'grouping' ) || "Status")
  const [ordering, setOrdering] = useState(localStorage.getItem( 'ordering' ) || "Title")
  
  // initially defined to deal with the case of empty lists
  let statuses = ['Backlog', "Todo", 'In progress', 'Done', 'Canceled']
  
  let priorities = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  }

  let priorityScores = [0,1,2,3,4]
  
  // sets the values for initial ordering and grouping. checks if already set in local storage to retain user state on reloads.
  useEffect(() => {
    setOrdering(localStorage.getItem( 'ordering' ) || "Title")
    localStorage.setItem("ordering", localStorage.getItem( 'ordering' ) || 'Title' );
    setGrouping(localStorage.getItem( 'grouping' ) || "Status")
    localStorage.setItem("grouping", localStorage.getItem( 'grouping' ) || 'Status' );
  }, [])

  // navbar for the control of view, dashboard displays the data in accordance for selected grouping and ordering
  return (
    <div className="App">
      <Navbar setGrouping={setGrouping} setOrdering={setOrdering}/>
      <Dashboard statuses={statuses} priorities={priorities} priorityScores={priorityScores} grouping={grouping} ordering={ordering} />
    </div>  
  );
}

export default App;
