import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CreditBox = styled.div`
color:white;
text-align: center;
width: 100vw;

div{
  display: inline-block;
}


.people{
  display: flex;
  flex-wrap: wrap;
  gap:30px;
  margin-left:30px;
  margin-right: 30px;
  margin-bottom:50px;
}

li {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

ul{
  display: flex;
  font-size:12px;
}

.photo{
  max-height:80px;
  overflow:hidden;
  border-radius: 100px
}

.photo img{
  width:80px;
  max-height:initial;
  margin-top:-10%;
}
`;

const IMAGE_BASE_URL="https://image.tmdb.org/t/p/w500";
const NO_IMAGES="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

const Credits = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [credits, SetCredits] = useState({cast:[],crew:[]});

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: apiKey,
      },
    };

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=ko`,
      options
    )
      .then((response) => response.json())
      .then((response) => SetCredits(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <CreditBox>
      <h3>출연진 및 제작진</h3>
      <ul>
        <div className="people">
        {credits.cast.map((credit)=>(
          <li key={credit.id}>
            <div className="photo">
            <img src={credit.profile_path ? `${IMAGE_BASE_URL}${credit.profile_path}` : `${NO_IMAGES}`}
            alt={credit.id}
            /></div>
            <br/>
            {credit.original_name}
            <br/>
            {credit.known_for_department}
          </li>
        ))}
      </div>
      </ul>
      <ul>
      <div className="people">
        {credits.crew.map((credit)=>(
          <li key={credit.id}>
            <div className="photo">
            <img src={credit.profile_path ? `${IMAGE_BASE_URL}${credit.profile_path}` : `${NO_IMAGES}`}
            alt={credit.id}
            /></div>
            {credit.original_name}
            <br/>
            {credit.known_for_department}
          </li>
        ))}
      </div>
      </ul>
    </CreditBox>
  );
};


export default Credits;