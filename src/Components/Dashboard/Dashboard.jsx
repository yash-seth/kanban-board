import React from 'react'
import {useState, useEffect} from 'react'
import "./Dashboard.css"
import List from '../List/List'

function Dashboard({statuses, priorities, priorityScores, grouping, ordering}) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({"tickets": [],
        "users": []  
    }
    )

    useEffect(() => {
        fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
        .then(response => {
          if(response.ok) {
            return response.json();
          }
          throw response
        })
        .then(response => {
          setData(response)
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
        })
      }, [])

    const [ticketMap, setTicketMap] = useState([])

    let statusTicketMapPriority = () => {
        let obj = []
        statuses.forEach(status => {
            let tmp = [];
            data['tickets'].forEach(ticket => {
                if(status === ticket.status) tmp.push(ticket)
            })
            tmp.sort(cmpPriority)
            obj.push(tmp)
        });
        setTicketMap(obj)
    }

    let statusTicketMapTitle = () => {
        let obj = []
        statuses.forEach(status => {
            let tmp = [];
            data['tickets'].forEach(ticket => {
                if(status === ticket.status) tmp.push(ticket)
            })
            tmp.sort(cmpTitle)
            obj.push(tmp)
        });
        setTicketMap(obj)
    }

    let userTicketMapTitle = () => {
        let obj = []
        data['users'].forEach(user => {
            let tmp = [];
            data['tickets'].forEach(ticket => {
                if(user.id === ticket.userId) tmp.push(ticket)
            })
            tmp.sort(cmpTitle)
            obj.push(tmp)
        });
        setTicketMap(obj)
    }

    let userTicketMapPriority = () => {
        let obj = []
        data['users'].forEach(user => {
            let tmp = [];
            data['tickets'].forEach(ticket => {
                if(user.id === ticket.userId) tmp.push(ticket)
            })
            tmp.sort(cmpPriority)
            obj.push(tmp)
        });
        setTicketMap(obj)
    }

    let priorityTicketMapTitle = () => {
        let obj = []
        priorityScores.forEach(priority => {
            let tmp = [];
            data['tickets'].forEach(ticket => {
                if(priority === ticket.priority) tmp.push(ticket)
            })
            tmp.sort(cmpTitle)
            obj.push(tmp)
        });
        setTicketMap(obj)
    }

    let priorityTicketMapPriority = () => {
        let obj = []
        priorityScores.forEach(priority => {
            let tmp = [];
            data['tickets'].forEach(ticket => {
                if(priority === ticket.priority) tmp.push(ticket)
            })
            tmp.sort(cmpPriority)
            obj.push(tmp)
        });
        setTicketMap(obj)
    }

    function cmpTitle(a, b) {
        return a.title.localeCompare(b.title);
    }

    function cmpPriority(a, b) {
        return b.priority - a.priority;
    }

    useEffect(() => {
        if(grouping === 'Status' && ordering === 'Priority') {
            statusTicketMapPriority()
        } else if(grouping === 'Status' && ordering === 'Title') {
            statusTicketMapTitle()
        } else if(grouping === 'User' && ordering === 'Priority') {
            userTicketMapPriority()
        } else if(grouping === 'User' && ordering === 'Title') {
            userTicketMapTitle()
        } else if(grouping === 'Priority' && ordering === 'Priority') {
            priorityTicketMapPriority()
        } else if(grouping === 'Priority' && ordering === 'Title') {
            priorityTicketMapTitle()
        }
    }, [grouping, ordering])

    useEffect(() => {
        statusTicketMapTitle()
    }, [data])
    
    if (isLoading) {
        return <div className="App">Loading...</div>;
    }

  return (
    <div className='dashboard-main'>
        {grouping === "Status" ? 
            ticketMap.map((ticketList, key) => {
                return (
                <div className='dashboard-list'>
                    <p className='dashboard-list-header'>{statuses[key]}</p>
                    <List key={key} ticketList={ticketList} />
                </div>
                )
            })
        :
        grouping === 'User' ? 
        ticketMap.map((ticketList, key) => {
            return (
            <div className='dashboard-list'>
                <p className='dashboard-list-header'>{data['users'][key].name}</p>
                <List key={key} ticketList={ticketList} />
            </div>
            )
        })
        :
        grouping === 'Priority' ? 
        ticketMap.map((ticketList, key) => {
            return (
            <div className='dashboard-list'>
                <p className='dashboard-list-header'>{priorities[key]}</p>
                <List key={key} ticketList={ticketList} />
            </div>
            )
        })
        :
        (<span></span>)
        }
    </div>
  )
}

export default Dashboard