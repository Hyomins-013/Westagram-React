/* eslint-disabled  */
import react, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../../styles/common.css";
import "./Login.css";

const Login = () => {

  const [userId, setUserId] = useState(" ");
  const [userPassword, setUserPassword] = useState(" ");
  const [isDisabled, setIsDisabled] = useState(false);
  const [changePage, setChangePage] = useState("#none");
  const [loginButton, setLoginButton] = useState(false);
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main');
  };
  
  const EventHandler = (e) => {
      
      switch (e.target.userId) {
        case userId:
        setUserId(e.target.userId)
        break
        case userPassword:
        setUserPassword(e.target.userPassword)
        break
        default:
        break
      }

      if (userId && userPassword) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
  }

  return (
    <form id="commonDiv">
      <p className="loginLogo">westagram</p>
      <input
        onKeyUp={ (e) => setUserId(e.target.value) }
        type="text"
        id="loginBox"
        name="loginBox"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onKeyUp={ (e) => setUserPassword(e.target.value) }
        type="password"
        id="passwordBox"
        name="passwordBox"
        placeholder="비밀번호"
      />
        <button id="loginButton" disabled={isDisabled} onClick={goToMain}>
          로그인
        </button>
      <a className="forgetPassword">비밀번호를 잊으셨나요?</a>
    </form>
    
  );
  
};

export default Login;
