import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginBlock = styled.div`
  color: white;
  text-align: center;
  height: 100vh;

  input {
    width: 470px;
    height: 35px;
    border-radius: 50px;
    padding-left: 30px;
  }

  button {
    width: 500px;
    height: 45px;
    border-radius: 50px;
    background-color: white;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
  }

  .errorMessage {
    font-size: 13px;
    color: red;
  }


  @media (max-width:767px){
    input{
      width:300px;
    }

    button{
      width:300px;
    }
  }
`;
const LoginPage = () => {
  const [Id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [pwValid, setPwValid] = useState(false);

  const navigate=useNavigate();

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const hasLetter = /[a-zA-Z]/.test(e.target.value);
    const hasNumber = /\d/.test(e.target.value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(e.target.value);
    if (hasLetter && hasNumber && hasSpecialChar) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Id && pwValid) {
      try {
        const response = await axios.post("http://localhost:8080/auth/login", {
          username: Id,
          password: pw,
        });
        if (response.status === 200) {
          const token=response.data.token;
          localStorage.setItem("token",token);

          const config={
            headers:{Authorization:`Bearer ${token}`}
          };
          const userResponse=await axios.get("http://localhost:8080/auth/me",config);
          if(userResponse.status===200){
            const {name}=userResponse.data;
            localStorage.setItem("username",name);
            navigate('/');
            window.location.reload();
          }
          else{
            alert("dd");
          }
        }
      } catch (error) {
        alert("로그인 오류 발생");
      }
    }
  };

  return (
    <LoginBlock>
      <form onSubmit={handleSubmit}>
        <input placeholder="아이디" value={Id} onChange={handleId} />
        <div className="errorMessage">
          {Id.length <= 0 && <div>아이디를 입력해주세요</div>}
        </div>
        <br />
        <input
          placeholder="비밀번호"
          type="password"
          value={pw}
          onChange={handlePw}
        />
        <div className="errorMessage">
          {!pwValid && pw.length >= 4 && pw.length <= 12 && (
            <div>
              영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.
            </div>
          )}
          {pw.length > 0 && pw.length < 4 && (
            <div>비밀번호는 최소 4자리 이상이어야 합니다.</div>
          )}
          {pw.length > 13 && <div>비밀번호는 최대 12자리까지 가능합니다.</div>}
        </div>
        <br />
        <br />
        <button type="submit">로그인</button>
      </form>
    </LoginBlock>
  );
};

export default LoginPage;
