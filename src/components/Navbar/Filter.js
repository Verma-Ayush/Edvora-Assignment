import React, { Fragment, useState } from "react";
import vector from "../../images/vector.png";
import Modal from "./Modal";

const Filter = ({ setRides, rides, allRides }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Fragment>
      <div
        className="Filter"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        <img src={vector} alt="" />
        <p>Filters</p>
      </div>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          setRides={setRides}
          rides={rides}
          allRidess={allRides}
        />
      )}
    </Fragment>
  );
};

export default Filter;
