import React, { useEffect, useRef, useState } from "react";

const Modal = ({ setRides, rides }) => {
  var allRides = [...rides];
  const prevStateRef = useRef();
  useEffect(() => {
    prevStateRef.current = allRides;
  }, []);

  const [stateName, setStateName] = useState("all");
  const [cityName, setCityName] = useState("all");

  const setStateRides = (_stateName) => {
    setStateName(_stateName);
    var newRides = [];
    if (prevStateRef.current !== undefined) {
      newRides = prevStateRef.current.filter((r) => {
        return r.state === _stateName;
      });
    } else {
      newRides = allRides.filter((r) => {
        return r.state === _stateName;
      });
    }
    setRides(newRides);
  };

  const setCityRides = (_cityName) => {
    setCityName(_cityName);

    const newRides = rides.filter((r) => {
      return _cityName === "all" || r.city === _cityName;
    });
    setRides(newRides);
  };

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  //////
  var states = [];
  if (prevStateRef.current !== undefined) {
    for (let i = 0; i < prevStateRef.current.length; i++) {
      states.push(prevStateRef.current[i].state);
    }
  } else {
    for (let i = 0; i < allRides.length; i++) {
      states.push(allRides[i].state);
    }
  }
  states.filter(onlyUnique);

  /////

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
          {rides.map((e, id) => {
            return (
              <option value={e.city} key={id}>
                {e.city}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Modal;
