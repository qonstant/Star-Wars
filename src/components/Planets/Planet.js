import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population: {planet.population}</p>
      <p>Rotation Period: {planet.rotation_period}</p>
      <p>Orbital Period: {planet.orbital_period}</p>
      <p>Diameter: {planet.diameter}</p>
      <p>Gravity: {planet.gravity}</p>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
    </div>
  );
};

export default Planet;
