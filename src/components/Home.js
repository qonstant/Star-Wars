import React, { useState } from "react";

import Navbar from "./Navbar";
import Films from "./Films/Films";
import Planets from "./Planets/Planets";
import People from "./People/People";
import Starships from "./Starships/Starships";

const Home = () => {
  const [page, setPage] = useState("planets");

  return (
    <>
      <div className="App">
        <img src="https://loodibee.com/wp-content/uploads/Star-Wars-transparent-logo.png" alt="Star Wars Logo" className="top-image" />
        <h1>THIS IS THE WAY</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? (
            <Planets />
          ) : page === "people" ? (
            <People />
          ) : page === "starships" ? (
            <Starships />
          ) : (
            <Films />
          )}
        </div>

        <div className="footer">© Copyright 2024, Rakymzhan Zhabagin</div>
      </div>
    </>
  );
};

export default Home;
