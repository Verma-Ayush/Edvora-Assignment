import React from "react";
import "./Rides.css";

const Ride = ({ ride, user }) => {
  function getDistance(station_path, station_code) {
    var d1 = 1000000;
    for (let i = 0; i < station_path.length; i++) {
      d1 = Math.min(d1, Math.abs(station_path[i] - station_code));
    }
    return d1;
  }
  return (
    <div className="Ride">
      <div className="Ride-content">
        <img src={ride.map_url} alt="img" />
        <div className="data">
          <p>
            <span>Ride Id</span> : {ride.id}
          </p>
          <p>
            <span>Origin Station</span> : {ride.origin_station_code}
          </p>
          <p>
            <span>station_path</span> : [{ride.station_path.join(", ")}]
          </p>
          <p>
            <span>Date</span> : {ride.date}
          </p>
          <p>
            <span>Distance</span>s :{" "}
            {getDistance(ride.station_path, user.station_code)}
          </p>
        </div>
      </div>
      <div className="place">
        <div className="placedata">{ride.city}</div>
        <div className="placedata">{ride.state}</div>
      </div>
    </div>
  );
};

export default Ride;
