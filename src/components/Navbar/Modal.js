import React, { useState } from "react";

const Modal = ({ setRides, rides, allRidess }) => {
  const [cityName, setCityName] = useState("all");
  const [stateName, setStateName] = useState("all");

  const setStateRides = (_stateName) => {
    setStateName(_stateName);
    const newRides = allRidess.filter((r) => {
      return _stateName === "all" || r.state === _stateName;
    });
    setRides(newRides);
  };

  const setCityRides = (_cityName) => {
    setCityName(_cityName);

    const newRides = allRidess.filter((r) => {
      return (
        (stateName === "all" || r.state === stateName) &&
        (_cityName === "all" || r.city === _cityName)
      );
    });
    setRides(newRides);
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  var states = [],
    cities = [];
  for (let i = 0; i < allRidess.length; i++) {
    states.push(allRidess[i].state);
  }

  for (let i = 0; i < allRidess.length; i++) {
    if (allRidess[i].state === stateName || stateName === "all") {
      cities.push(allRidess[i].city);
    }
  }

  cities = cities.filter(onlyUnique);
  states = states.filter(onlyUnique);

  return (
    <div className="Modal-box">
      <p>Filters</p>
      <hr />
      <div className="Modal-filters">
        <select
          id="stateSelect"
          onChange={(e) => setStateRides(e.target.value)}
        >
          <option value={"all"}>State</option>
          {states.map((e, id) => {
            return (
              <option value={e} key={id}>
                {e}
              </option>
            );
          })}
        </select>
        <select id="citySelect" onChange={(e) => setCityRides(e.target.value)}>
          <option value={"all"}>City</option>
          {cities.map((e, id) => {
            return (
              <option value={e} key={id}>
                {e}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Modal;
