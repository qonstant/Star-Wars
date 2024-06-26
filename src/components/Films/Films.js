import React from "react";
import { useQuery } from "react-query";

import Film from "./Film";

import Loader from "../Loader";

const fetchFilms = async () => {
  const res = await fetch(`https://swapi.dev/api/films/`);
  return res.json();
};

const Films = () => {

  const { data, status } = useQuery("films", fetchFilms, {
    onSuccess: () => console.log("Films Data feched successfully"),
    onError: () => console.log("Error while fetching data of films"),
  });

  return (
    <>
      <h2>Films</h2>

      {status === "loading" ? (
        <Loader />
      ) : status === "error" ? (
        <div> Error fetching data</div>
      ) : status === "success" ? (
        data.results.map((film) => <Film key={film.title} film={film} />)
      ) : null}
    </>
  );
};

export default Films;
