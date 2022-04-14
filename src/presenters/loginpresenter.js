import LoginView from "../views/loginview";
import { logOut, login, useAuth } from "../firebase";
import React, {useEffect, useRef, useState} from "react"
import { async } from "@firebase/util";

function LoginPresenter (){
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const email = useRef();
    const password = useRef();

    async function handleLogin(){
        setLoading(true);
            await login(email.current.value, password.current.value);
        setLoading(false);
    }

    async function handleLogOut(){
        setLoading(true);
        try {
            await logOut();
        } catch (e){
            alert ("error");
        }
        setLoading(false);
    }

    return (<LoginView emailRef={email} passRef={password}
    user = {currentUser} handleLogin={handleLogin}/>);
}

export default LoginPresenter;