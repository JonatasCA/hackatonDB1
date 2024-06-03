import React from "react";
import Header from '../components/header/header.jsx'
import Login from "../components/cards/login.jsx";

function LoginPage() {

    return(
        <React.StrictMode>
        <Header />
        <Login />
      </React.StrictMode>
    )

}

export default LoginPage