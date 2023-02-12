import React, { useContext } from 'react'
import { UserContext } from '../App'

export default function Dashboard() {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext);
  return (
    <div style={{textAlign:'center',marginTop:'100px'}}>
         <h3>Welcome {loggedInUser.email}</h3>
         <p>this is your dashboard</p>
    </div>
  )
}
