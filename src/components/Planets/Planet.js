import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {planet.population}</p>
      <p>Rotation Period - {planet.rotation_period}</p>
      <p>Climate - {planet.climate}</p>
      <p>Gravity - {planet.gravity}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default Planet;
