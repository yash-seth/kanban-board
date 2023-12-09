import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import {useEffect, useState} from 'react'

function App() {
  const [grouping, setGrouping] = useState("Status")
  const [ordering, setOrdering] = useState("Title")
  
  let statuses = ['Backlog', "Todo", 'In progress', 'Done', 'Canceled']

  let priorities = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority'
  }

  let priorityScores = [0,1,2,3,4]
  
  useEffect(() => {
    setOrdering("Title")
    setGrouping("Status")
  }, [])

  return (
    <div className="App">
      <Navbar setGrouping={setGrouping} setOrdering={setOrdering}/>
      <Dashboard statuses={statuses} priorities={priorities} priorityScores={priorityScores} grouping={grouping} ordering={ordering} />
    </div>  
  );
}

export default App;
