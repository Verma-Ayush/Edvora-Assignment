import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import Filter from "./Filter";

const Navbar = ({ upcomingRidesCount, pastRidesCount, setRides, rides }) => {
  const currPath = useLocation().pathname;
  return (
    <div className="navbar">
      <div className="options">
        <Link to="/" className={currPath === "/" ? "active" : ""}>
          Nearest Rides
        </Link>
        <Link
          to="/upcoming-rides"
          className={currPath === "/upcoming-rides" ? "active" : ""}
        >
          Upcoming Rides ({upcomingRidesCount})
        </Link>
        <Link
          to="/past-rides"
          className={currPath === "/past-rides" ? "active" : ""}
        >
          Past Rides ({pastRidesCount})
        </Link>
      </div>
      <Filter setRides={setRides} rides={rides} />
    </div>
  );
};

export default Navbar;
