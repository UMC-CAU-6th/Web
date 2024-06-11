import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const SignupBlock = styled.div`
  color: white;
  text-align: center;

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

  .buttonAble {
    background-color: #fcbe4c;
  }

  .errorMessage {
    font-size: 13px;
    color: red;
  }

  .exist {
    display: inline-block;
    margin-right: 20px;
    font-size: 0.9rem;
  }
  .goLogin {
    display: inline-block;
    margin-left: 20px;
    font-weight: bold;
    font-size: 0.9rem;
    color:white;
    text-decoration: none;
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

const SignupPage = () => {
  const [name, setName] = useState("");
  const [id, setId]=useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [pw, setPw] = useState("");
  const [checkPw, setCheckPw] = useState("");

  const [nameValid, setNameValid] = useState(false);
  const [idValid, setIdValid]=useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [ageMinusValid, setAgeMinusValid] = useState(true); //양수인지
  const [ageRealValid, setAgeRealValid] = useState(true); //정수인지
  const [ageValid, setAgeValid] = useState(true); //숫자형태인지
  const [ageAdultValid, setAgeAdultValid] = useState(true);
  const [pwValid, setPwValid] = useState(false);
  const [checkPwValid, setCheckPwValid] = useState(false);
  const [allValid, setAllValid] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);

    if (typeof e.target.value === "string") {
      setNameValid(true);
    } else {
      setNameValid(false);
    }
  };

  const handleId = (e) => {
    setId(e.target.value);

    if (typeof e.target.value === "string") {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);

    if (e.target.value.includes("@")) {
      setEmailValid(true);
      if (e.target.value.endsWith(".")) {
        setEmailValid(false);
      }
    } else {
      setEmailValid(false);
    }
  };

  const handleMinusAge = (e) => {
    setAge(e.target.value);
    if (Number(e.target.value) > 0) {
      setAgeMinusValid(true);
    } else if (isNaN(e.target.value)) {
      setAgeMinusValid(true);
    } else {
      setAgeMinusValid(false);
    }
  };

  const handleRealAge = (e) => {
    setAge(e.target.value);
    if (Number(e.target.value) == parseInt(e.target.value)) {
      setAgeRealValid(true);
    } else if (isNaN(e.target.value)) {
      setAgeRealValid(true);
    } else {
      setAgeRealValid(false);
    }
  };

  const handleAge = (e) => {
    setAge(e.target.value);
    if (isNaN(e.target.value)) {
      setAgeValid(false);
    } else {
      setAgeValid(true);
    }
  };

  const handleAdultAge = (e) => {
    setAge(e.target.value);
    if (Number(e.target.value) >= 19 || Number(e.target.value) < 0) {
      setAgeAdultValid(true);
    } else if (isNaN(e.target.value)) {
      setAgeAdultValid(true);
    } else {
      setAgeAdultValid(false);
    }
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

  const handleCheckPw = (e) => {
    setCheckPw(e.target.value);

    if (e.target.value === pw) {
      setCheckPwValid(true);
    } else {
      setCheckPwValid(false);
    }
  };

  useEffect(() => {
    setAllValid(
      nameValid &&
      idValid&&
        emailValid &&
        ageValid &&
        ageAdultValid &&
        ageMinusValid &&
        ageRealValid &&
        pwValid &&
        checkPwValid
    );
  }, [
    nameValid,
    idValid,
    emailValid,
    ageValid,
    ageAdultValid,
    ageMinusValid,
    ageRealValid,
    pwValid,
    checkPwValid,
  ]);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (allValid) {
      console.log(
        "name: " +
          name +
          "\nemail: " +
          email +
          "\nage: " +
          age +
          "\npassword: " +
          pw +
          "\ncheckpassword: " +
          checkPw
      );

      const userData = {
        name: name,                
        email: email,              
        age: parseInt(age, 10),    
        username: id,            
        password: pw,              
        passwordCheck: checkPw     
      };

      try{
        const response=await fetch('http://localhost:8080/auth/signup',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(userData),
        });
        if (!response.ok) {
          throw new Error();
        }
    
        console.log('Success:', await response.json());
      navigate('/login');
      alert('회원가입 성공');
      } catch (error) {
        console.error('Error:', error);
      }
    };
  }

  return (
    <SignupBlock>
      <h3>회원가입 페이지</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={handleName}
        />
        <div className="errorMessage">
          {!nameValid && name.length > 0 && (
            <div>올바른 이름을 입력해주세요.</div>
          )}
        </div>
        <br />

        <input
        placeholder="아이디를 입력해주세요"
        value={id}
        onChange={handleId}/>
        <div className="errorMessage">
        {!idValid && id.length > 0 && (
            <div>올바른 아이디를 입력해주세요.</div>
          )}
        </div>
        <br />
        <input
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={handleEmail}
        />
        <div className="errorMessage">
          {!emailValid && email.length > 0 && (
            <div>올바른 이메일을 입력해주세요.</div>
          )}
        </div>

        <br />
        <input
          placeholder="나이를 입력해주세요"
          value={age}
          onChange={(e) => {
            handleAge(e);
            handleMinusAge(e);
            handleRealAge(e);
            handleAdultAge(e);
          }}
        />
        <div className="errorMessage">
          {!ageValid && age.length > 0 && (
            <div>나이는, 숫자를 입력받아야 합니다.</div>
          )}
        </div>
        <div className="errorMessage">
          {!ageMinusValid && age.length > 0 && (
            <div>나이는, 음수가 될 수 없습니다.</div>
          )}
        </div>
        <div className="errorMessage">
          {!ageRealValid && age.length > 0 && (
            <div>나이는, 소수가 될 수 없습니다.</div>
          )}
        </div>
        <div className="errorMessage">
          {!ageAdultValid && age.length > 0 && (
            <div>우리 영화 사이트는, 19살 이상만 가입이 가능합니다.</div>
          )}
        </div>
        <br />

        <input
          placeholder="비밀번호를 입력해주세요"
          value={pw}
          onChange={handlePw}
          type="password"
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

        <input
          placeholder="비밀번호 확인"
          value={checkPw}
          onChange={handleCheckPw}
          type="password"
        />
        <div className="errorMessage">
          {!checkPwValid && checkPw.length > 0 && (
            <div>비밀번호를 다시 입력해주세요.</div>
          )}
        </div>
        <br />
        <br />
        <button
          type="submit"
          disabled={!allValid}
          className={allValid ? "buttonAble" : ""}
        >
          제출하기
        </button>

        <br />
        <br />
        <br />

        <div className="exist">이미 아이디가 있으신가요?</div>
        <Link className="goLogin" to="/login">로그인 페이지로 이동하기</Link>
      </form>
    </SignupBlock>
  );
};

export default SignupPage;
