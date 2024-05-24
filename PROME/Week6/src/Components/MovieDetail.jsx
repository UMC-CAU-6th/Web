import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_API_KEY,
  },
};
export const MovieDetail = () => {
  const { state } = useLocation();
  const param = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${param.id}/credits`, options)
      .then((response) => {
        console.log(response.json);
        return response.json();
      })
      .then((response) => setData(response.crew))
      .catch((err) => {
        console.error(err);
      });
  }, [param.id]);
  return (
    <div>
      <h1>{param.id}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w1280${state.poster_path}`}
        alt=""
      />
      <div>
        {Object.keys(data).length &&
          data.map((people) => {
            console.log(people.name);
            return <div>{people.name}</div>;
          })}
      </div>
    </div>
  );
};
