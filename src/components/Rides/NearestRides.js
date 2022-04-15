import React from "react";
import Ride from "./Ride";
import "./Rides.css";

const NearestRides = ({ rides, user }) => {
  return (
    <div className="NearestRides">
      {rides.map((ride, id) => {
        return <Ride ride={ride} key={id} user={user} />;
      })}
    </div>
  );
};

export default NearestRides;
