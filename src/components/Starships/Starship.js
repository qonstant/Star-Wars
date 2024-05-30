import React from "react";

const Starship = ({ starship }) => {
  return (
    <div className="card">
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Manufacturer: {starship.manufacturer}</p>
      <p>Length: {starship.length}</p>
      <p>Maximum Speed: {starship.max_atmosphering_speed}</p>
    </div>
  );
};

export default Starship;
