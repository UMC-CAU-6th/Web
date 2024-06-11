import styled from "styled-components";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import axios from "axios";

const MainBlock = styled.div`
  margin-bottom: 120px;
  margin-right: 0px;
  margin-left: 0px;

  width: 100%;

  .welcome {
    background-color: black;
    color: white;
    font-size: 24px;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 220px;
    display: flex;
    width: 100%;
  }

  background-color: #1e174e;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 30px;
  line-height: 80px;
  font-weight: bold;

  input {
    width: 300px;
    height: 30px;
    border-radius: 36px;
    padding-left: 20px;
  }

  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ffe731;
    border: none;
    cursor: pointer;
  }

  @media (max-width:767px){
    .welcome{
      font-size: 20px;
    }
    div{
      font-size:24px;
    }

    input{
      width: 250px;
    }
  }
`;

const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [user,setUser]=useState(null);
  const [ment,setMent]=useState('환영합니다');

  const initializeUserInfo=async()=>{
    const token=localStorage.getItem('token');
    if (token) {
      try {
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const userResponse = await axios.get("http://localhost:8080/auth/me", config);
        if (userResponse.status === 200) {
          const {name}=userResponse.data;
          setMent(`${name}님 환영합니다`);
        }
        console.log(user);
      } catch (error) {
        console.error("사용자 정보를 가져오는 데 실패했습니다.", error);
        setMent('환영합니다');
      }
    }
  };

  useEffect(()=>{
    initializeUserInfo();
  },[]);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }, [value]);
    return debouncedValue;
  };

  const debouncedSearchText=useDebounce(inputValue,1000);

  return (
    <MainBlock>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="welcome">{ment}</div>
          📽️ Find your movies !
          <br />
          <input onChange={handleInputChange} />
          <button type="submit">🔍</button>
        </div>
      </form>
      {<Search search={debouncedSearchText} />}
    </MainBlock>
  );
};

export default MainPage;
