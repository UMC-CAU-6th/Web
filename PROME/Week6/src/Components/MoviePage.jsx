import React, { useEffect, useState } from "react";
import { Card } from "./Card";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_KEY,
  },
};

export const MoviePage = ({ category, search = false }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3${search ? "/search" : ""}/movie${category}`,
      options
    )
      .then((response) => {
        setLoading(false);
        return response.json();
      })
      .then((response) => setMovies(response.results))
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category, search]);

  return (
    <div className="flex flex-wrap gap-5 p-5 mx-auto w-3/4 ">
      {loading && (
        <div className="fiexd bg-black w-[100vh] h-[100vh] opacity-50" />
      )}
      {search
        ? movies &&
          movies.map((moviedata, index) => {
            return <Card key={index} {...moviedata} search={search} />;
          })
        : movies &&
          movies.map((moviedata, index) => {
            return <Card key={index} {...moviedata} />;
          })}
    </div>
  );
};
