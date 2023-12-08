import React from 'react'
import {useState, useEffect} from 'react'
import "./Dashboard.css"
import Ticket from '../Ticket/Ticket'
import List from '../List/List'

function Dashboard({statuses, priorities, priorityScores, data, grouping}) {
    // let demoTicket = {
    //     "id": "CAM-1",
    //     "title": "Update User Profile Page UI",
    //     "tag": [
    //         "Feature request"
    //     ],
    //     "userId": "usr-1",
    //     "status": "Todo",
    //     "priority": 4
    // }
    // let ticketList = [demoTicket, demoTicket, demoTicket]

    let users = [
        {
            "id": "usr-1",
            "name": "Anoop sharma",
            "available": false
        },
        {
            "id": "usr-2",
            "name": "Yogesh",
            "available": true
        },
        {
            "id": "usr-3",
            "name": "Shankar Kumar",
            "available": true
        },
        {
            "id": "usr-4",
            "name": "Ramesh",
            "available": true
        },
        {
            "id": "usr-5",
            "name": "Suresh",
            "available": true
        }
    ]


    let ticketList = [
        {
            "id": "CAM-1",
            "title": "Update User Profile Page UI",
            "tag": [
                "Feature request"
            ],
            "userId": "usr-1",
            "status": "Todo",
            "priority": 4
        },
        {
            "id": "CAM-2",
            "title": "Add Multi-Language Support - Enable multi-language support within the application.",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-2",
            "status": "In progress",
            "priority": 3
        },
        {
            "id": "CAM-3",
            "title": "Optimize Database Queries for Performance",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-2",
            "status": "In progress",
            "priority": 1
        },
        {
            "id": "CAM-4",
            "title": "Implement Email Notification System",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-1",
            "status": "In progress",
            "priority": 3
        },
        {
            "id": "CAM-5",
            "title": "Enhance Search Functionality",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-5",
            "status": "In progress",
            "priority": 0
        },
        {
            "id": "CAM-6",
            "title": "Third-Party Payment Gateway",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-2",
            "status": "Todo",
            "priority": 1
        },
        {
            "id": "CAM-7",
            "title": "Create Onboarding Tutorial for New Users",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-1",
            "status": "Backlog",
            "priority": 2
        },
        {
            "id": "CAM-8",
            "title": "Implement Role-Based Access Control (RBAC)",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-3",
            "status": "In progress",
            "priority": 3
        },
        {
            "id": "CAM-9",
            "title": "Upgrade Server Infrastructure",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-5",
            "status": "Todo",
            "priority": 2
        },
        {
            "id": "CAM-10",
            "title": "Conduct Security Vulnerability Assessment",
            "tag": [
                "Feature Request"
            ],
            "userId": "usr-4",
            "status": "Backlog",
            "priority": 1
        }
    ]

    const [ticketMap, setTicketMap] = useState([])

    let statusTicketMap = () => {
        let obj = []
        statuses.forEach(status => {
            let tmp = [];
            ticketList.forEach(ticket => {
                // console.log(ticket.status, " ", status)
                if(status === ticket.status) tmp.push(ticket)
            })
            obj.push(tmp)
        });
        console.log(obj)
        setTicketMap(obj)
    }

    let userTicketMap = () => {
        let obj = []
        users.forEach(user => {
            let tmp = [];
            ticketList.forEach(ticket => {
                // console.log(ticket.status, " ", status)
                if(user.id === ticket.userId) tmp.push(ticket)
            })
            obj.push(tmp)
        });
        console.log(obj)
        setTicketMap(obj)
    }

    let priorityTicketMap = () => {
        let obj = []
        priorityScores.forEach(priority => {
            let tmp = [];
            ticketList.forEach(ticket => {
                // console.log(ticket.status, " ", status)
                if(priority === ticket.priority) tmp.push(ticket)
            })
            obj.push(tmp)
        });
        console.log(obj)
        setTicketMap(obj)
    }

    useEffect(() => {
        if(grouping === 'Status') statusTicketMap()
        else if(grouping === 'User') userTicketMap()
        else if(grouping === 'Priority') priorityTicketMap()
    }, [grouping])
    
  return (
    <div className='dashboard-main'>
        {grouping === "Status" ? 
            ticketMap.map((ticketList, key) => {
                return (
                <div className='dashboard-list'>
                    <p className='dashboard-list-header'>{statuses[key]}</p>
                    <List ticketList={ticketList} />
                </div>
                )
            })
        :
        grouping === 'User' ? 
        ticketMap.map((ticketList, key) => {
            return (
            <div className='dashboard-list'>
                <p className='dashboard-list-header'>{users[key].name}</p>
                <List ticketList={ticketList} />
            </div>
            )
        })
        :
        grouping === 'Priority' ? 
        ticketMap.map((ticketList, key) => {
            return (
            <div className='dashboard-list'>
                <p className='dashboard-list-header'>{priorities[key]}</p>
                <List ticketList={ticketList} />
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