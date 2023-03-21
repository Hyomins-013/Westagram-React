/* eslint-disabled  */
import react, { useState } from "react";
import { Link, Route } from "react-router-dom";
import Main from "../Main/Main";
import "../../styles/common.scss";
import "./Login.scss";

const Login = () => {
  const [userId, setUserId] = useState(" ");
  const [userPassword, setUserPassword] = useState(" ");
  const [isDisabled, setIsDisabled] = useState(false);
  const [loginButton, setLoginButton] = useState(false);

  return (
    <form className="commonDiv">
      <p className="loginLogo">westagram</p>
      <input
        onKeyUp={(e) => setUserId(e.target.value)}
        type="text"
        className="loginBox"
        name="loginBox"
        placeholder="전화번호, 사용자 이름 또는 이메일"
      />
      <input
        onKeyUp={(e) => setUserPassword(e.target.value)}
        type="password"
        className="passwordBox"
        name="passwordBox"
        placeholder="비밀번호"
      />
      <Link to="/main">
        <button className="loginButton" disabled={isDisabled}>
          로그인
        </button>
      </Link>
      <a className="forgetPassword">비밀번호를 잊으셨나요?</a>
    </form>
  );
};

export default Login;
