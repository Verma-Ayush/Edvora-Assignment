import React from "react";
import Ride from "./Ride";
import "./Rides.css";

const UpcomingRides = ({ rides, user }) => {
  return (
    <div className="UpcomingRides">
      {rides.map((ride, id) => {
        return <Ride ride={ride} key={id} user={user} />;
      })}
    </div>
  );
};

export default UpcomingRides;
