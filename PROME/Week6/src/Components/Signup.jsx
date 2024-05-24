import { useState } from "react";

export const Signup = () => {
  const [userValid, setUserValid] = useState(false);
  const [user, setUser] = useState("");
  const checkUser = (user) => {
    const regExp = /^[a-zA-Z0-9]*$/;
    setUser(user);
    setUserValid(regExp.test(user));
  };
  return (
    <div>
      <form
        className="flex flex-col w-1/4 mx-auto py-20"
        onSubmit={() => {
          alert("회원가입 완료");
        }}
      >
        <input
          type="text"
          value={user}
          placeholder="아이디"
          onChange={(e) => checkUser(e.target.value)}
          className="p-3 mb-3"
        />
        {userValid || (
          <div className="text-red-500">"영어와 숫자로 입력하세요"</div>
        )}
        <input type="password" placeholder="비밀번호" className="p-3 mb-3" />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="p-3 mb-3"
        />
        <input type="text" placeholder="이름" className="p-3 mb-3" />
        <input type="email" placeholder="이메일" className="p-3 mb-3" />
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
