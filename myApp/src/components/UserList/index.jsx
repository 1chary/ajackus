import React, { useState, useEffect } from "react";
import "./index.css";
import UserNameCard from "../UserNameCard";
import Popup from "reactjs-popup"

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const [username, changeUsername] = useState("");
  const [mail, changeMail] = useState("");
  const [successfulMessage,userSuccessfulMessage] = useState(false)
  const [newUserAddMessage,failureMessage] = useState(false)

  const addNewUser = async () => {
    const api = "https://jsonplaceholder.typicode.com/users"
    const details = {username,mail}
    if (username !== "" && mail !== "") {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details),
        }
        const response = await fetch(api,options)
        if (response.ok === true) {
            const data = await response.json()
            userSuccessfulMessage(true)
        }
        else {
            failureMessage(true)
        }
    }   
  }

  useEffect(() => {
    const retrievingUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      const convertedCase = data.map((eachItem) => ({
        id: eachItem.id,
        name: eachItem.username,
        email: eachItem.email,
        phone: eachItem.phone,
      }));
      setUserData([...userData, ...convertedCase]);
    };
    retrievingUserData();
  }, []);

  return (
    <div className="user-list-container">
      <div className="alignment-container">
        <h1 className="user-list-heading">User List</h1>
        <Popup trigger={<button className="new-user-button-style"> + Add new User</button>}>
            <div className="add-new-user-container">
                <h1>Name</h1>
                <input type="text" className="input-box" value={username} onChange={(e) =>changeUsername(e.target.value)}/>
                <h2>email</h2>
                <input type="text" className="input-box" value = {mail} onChange={(e) =>changeMail(e.target.value)}/>
                <button className="button-styling" onClick={addNewUser}>Add</button>
                {successfulMessage && <p>User added successfully</p>}
                {newUserAddMessage && <p>Cannot add new user</p>}
            </div>
        </Popup>
        ;
      </div>
      {userData.map((eachItem) => (
        <UserNameCard key={eachItem.id} userDetails={eachItem} />
      ))}
    </div>
  );
};

export default UserList;
