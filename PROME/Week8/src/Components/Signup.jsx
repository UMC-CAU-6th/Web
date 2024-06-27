import { useState } from "react";

const postSignup = async (data) => {
  const res = await fetch("http://localhost:8080/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert("회원가입 실패");
    });
  localStorage.setItem("AccessToken", res.token);
};

export const Signup = () => {
  const [userValid, setUserValid] = useState(false);
  const [user, setUser] = useState("");
  const [data, setdata] = useState({
    name: "",
    email: "",
    age: "",
    username: "",
    password: "",
    passwordCheck: "",
  });
  const checkUser = (user) => {
    const regExp = /^[a-zA-Z0-9]*$/;
    setUser(user);
    setUserValid(regExp.test(user));
  };
  return (
    <div>
      <div className="text-white md:text-black xl:text-blue-500">aaaa</div>
      <form
        className="flex flex-col w-1/4 mx-auto py-20"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(data);
          postSignup(data);
        }}
      >
        <input
          type="text"
          value={user}
          placeholder="아이디"
          onChange={(e) => {
            checkUser(e.target.value);
            setdata({ ...data, username: e.target.value });
          }}
          className="p-3 mb-3"
        />
        {userValid || (
          <div className="text-red-500">"영어와 숫자로 입력하세요"</div>
        )}
        <input
          type="password"
          placeholder="비밀번호"
          className="p-3 mb-3"
          onChange={(e) => {
            setdata({ ...data, password: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="p-3 mb-3"
          onChange={(e) => {
            setdata({ ...data, passwordCheck: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="이름"
          className="p-3 mb-3"
          onChange={(e) => {
            setdata({ ...data, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="이메일"
          className="p-3 mb-3"
          onChange={(e) => {
            setdata({ ...data, email: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="나이"
          className="p-3 mb-3"
          onChange={(e) => {
            setdata({ ...data, age: e.target.value });
          }}
        />
        <button
          className="text-white p-3 disabled:opacity-50 bg-blue-500"
          type={"submit"}
          disabled={userValid ? false : true}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};
