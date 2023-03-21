/* eslint-disabled  */

import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Router from './Router';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( <Router /> );

// Main 컴포넌트를 확인 하고 싶으면 <Main />
// Login 컴포넌트를 확인 하고 싶으면 <Login />
