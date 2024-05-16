import "./Signin.css";
import { useNavigate } from "react-router-dom";

function MyInput(props) {
    return (
        <>
        <input className="signin-input" name="name" placeholder={props.name}></input> 
        <label className="warn" id="name-warn">{props.warnmsg}</label>
        </>    
        );
}

function Signin() {
    let signinContent = {
        name:"",
        email:"",
        age:"",
        password:""
    }

    let navigate = useNavigate();

    const checkName = (value) => {
        console.log(value);
        if (value === "") { return false; }
        else { return true; }
    }
    const checkEmail = (value) => {
        return /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(value);
    }
    const checkAge = (value) => {
        return /^[0-9][0-9]*$/i.test(value);
    }
    const checkPassword = (value) => {
        return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/.test(value);
    }
    const checkPasswordcheck = (value, checkValue) => {
        return (value === checkValue);
    }
    
    const handleSubmit = (event) => {
        let allSuccess = true;

        event.preventDefault();
        console.log(event.target.childNodes);
        const inputs = event.target.childNodes;

        if(!checkName(inputs[0].value)){ allSuccess=false; inputs[1].style.display = "block"; }
        else { signinContent.name=inputs[0].value; inputs[1].style.display = "none"; }
        if(!checkEmail(inputs[2].value)){ allSuccess=false; inputs[3].style.display = "block"; }
        else { signinContent.email=inputs[2].value; inputs[3].style.display = "none"; }
        if(!checkAge(inputs[4].value)){ allSuccess=false; inputs[5].style.display = "block"; }
        else { signinContent.age=inputs[4].value; inputs[5].style.display = "none"; }
        if(!checkPassword(inputs[6].value)){ allSuccess=false; inputs[7].style.display = "block"; }
        else { signinContent.password=inputs[6].value; inputs[7].style.display = "none"; }
        if(!checkPasswordcheck(inputs[6].value, inputs[8].value)){ allSuccess=false; inputs[9].style.display = "block"; }
        else { inputs[9].style.display = "none"; }

        if(allSuccess) {
            console.log(signinContent);
            navigate("/");
        }
    };

    return (
        <>
        <div id="login-main">
            <h2>회원가입</h2>
            <form className="signin-form" onSubmit={handleSubmit}>
                <MyInput name="이름" warnmsg="올바른 이름을 입력해주세요" />
                <MyInput name="이메일" warnmsg="올바른 이메일을 입력해주세요"/>
                <MyInput name="나이" warnmsg="올바른 나이를 입력해주세요"/>
                <MyInput name="비밀번호" warnmsg="올바른 비밀번호를 입력해주세요"/>
                <MyInput name="비밀번호 확인" warnmsg="비밀번호가 다릅니다"/>
                <div className="signin-btn-wrapper">
                <button className="signin-btn">제출하기</button> 
                </div>
                
            </form>
        </div>
        </>
    );
}

export default Signin;