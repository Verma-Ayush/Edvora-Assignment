import React from "react";
import "./Header.css";
export const Header = ({ user }) => {
  return (
    <div className="Header">
      <p className="heading">Edvora</p>
      <div className="user">
        <p>{user.name}</p>
        <img src={user.url} alt="Profile-Pic" />
      </div>
    </div>
  );
};
