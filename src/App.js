import "./App.css";
import { Header } from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NearestRides from "./components/Rides/NearestRides";
import UpcomingRides from "./components/Rides/UpcomingRides";
import PastRides from "./components/Rides/PastRides";
import { Fragment, useEffect, useRef, useState } from "react";
import Loader from "./components/Loader/Loader";
import getUser from "./controllers/getUser";
import getRides from "./controllers/getRides";
import {
  getNearestRides,
  getUpcomingRides,
  getPastRides,
} from "./controllers/getFilteredRides";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [rides, setRides] = useState([]);
  const allRidesRef = useRef();

  const fetchData = async () => {
    const userData = await getUser();
    const ridesData = await getRides();
    setUser(userData);
    setRides(ridesData);
    setLoading(false);
    allRidesRef.current = ridesData;
  };

  const pastRides = getPastRides(rides);
  const nearestRides = getNearestRides(rides, user.station_code);
  const upcomingRides = getUpcomingRides(rides);
  // console.log(user.station_code);
  // console.log(nearestRides);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <Header user={user} />
            <div className="content">
              <Navbar
                upcomingRidesCount={upcomingRides.length}
                pastRidesCount={pastRides.length}
                nearestRidesCount={nearestRides.length}
                setRides={setRides}
                rides={rides}
                allRides={
                  allRidesRef.current === undefined
                    ? rides
                    : allRidesRef.current
                }
              />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={<NearestRides rides={nearestRides} user={user} />}
                />
                <Route
                  exact
                  path="/upcoming-rides"
                  element={<UpcomingRides rides={upcomingRides} user={user} />}
                />
                <Route
                  exact
                  path="/past-rides"
                  element={<PastRides rides={pastRides} user={user} />}
                />
              </Routes>
            </div>
          </Fragment>
        )}
      </Router>
    </div>
  );
}

export default App;
