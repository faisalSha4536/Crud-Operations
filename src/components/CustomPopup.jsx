import React, { useState } from 'react'
import './style.css'
import { useSelector } from 'react-redux'
const CustomPopup = (props) => {

    const {popup, setPopup, id} = props
    const users = useSelector((state)=> state.app.users)
    
    const singleUser = users.filter((user) => id === user.id)
    
    

  return (
    <div className='main d-flex align-items-center justify-content-center h-100 position-fixed z-3 w-100 '>
        <div className="container h-50 w-25 rounded-3 p-2  bg-light">
           <h5>Name: {singleUser[0].name}</h5>
           <h5>Email: {singleUser[0].email}</h5>
           <h5>Gender: {singleUser[0].gender}</h5>
           <h5>Age: {singleUser[0].age}</h5>
            <div className="btn btn-success my-4" onClick={()=>setPopup(!popup)}>Close</div>
        </div>
    </div>
  )
} 

export default CustomPopup