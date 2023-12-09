import Dashboard from "./Components/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";
import {useEffect, useState} from 'react'

function App() {
  const [grouping, setGrouping] = useState("User")
  const [ordering, setOrdering] = useState("Priority")
  const [data, setData] = useState({"tickets": [],
    "users": []  
  }
  )
  const [users, setUsers] = useState([])
  
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
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      throw response
    })
    .then(response => {
      console.log("App: ", response)
      setData(response)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  // useEffect(() => {
  //   console.log(grouping)
  // }, [grouping])

  // useEffect(() => {
  //   console.log(ordering)
  // }, [ordering])
  
  useEffect(() => {
    setOrdering("Priority")
    setGrouping("Status")
  }, [])

  return (
    <div className="App">
      <Navbar setGrouping={setGrouping} setOrdering={setOrdering}/>
      <Dashboard statuses={statuses} priorities={priorities} priorityScores={priorityScores} data={data} grouping={grouping} ordering={ordering}/>
    </div>  
  );
}

export default App;
