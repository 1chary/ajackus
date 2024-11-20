import React, { useState,useEffect} from 'react'
import "./index.css"
import UserNameCard from '../UserNameCard';

const UserList = () => {
    const [userData,setUserData] = useState([]);

    useEffect(() => {
        const retrievingUserData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users") 
            const data = await response.json()
            console.log(data)
            const convertedCase = data.map((eachItem) => ({
                id: eachItem.id,
                name: eachItem.username,
                email: eachItem.email,
                phone: eachItem.phone
            }))
            setUserData([...userData,...convertedCase])
        }
        retrievingUserData()
    },[])


  return (
    <div className='user-list-container'>
        <div className="alignment-container">
            <h1 className='user-list-heading'>User List</h1>
            <button className="new-user-button-style">+Add New User</button>
        </div>
        {userData.map(eachItem => (
            <UserNameCard key = {eachItem.id} userDetails = {eachItem}/>
        ))}
    </div>
  )
}

export default UserList