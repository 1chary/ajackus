import React from "react";
import "./index.css";

const UserNameCard = (props) => {
  const { userDetails } = props;
  const { id, name, email } = userDetails;

  return (
    <div className="user-card">
      <div className="user-name-card-container">
        <h1 className="id-styling">{id}</h1>
        <h2 className="user-name">{name}</h2>
      </div>
      <div className="alignment-container">
        <p className="email-styling">{email}</p>
      </div>
      <div className="alignment-container">
        <button className="button-styling">edit</button>
        <button className="button-styling">delete</button>
      </div>
    </div>
  );
};

export default UserNameCard;
