import LoginView from "../views/loginview";
import { logOut, login, useAuth } from "../firebase";
import React, { useRef, useState} from "react"

function LoginPresenter (){
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const email = useRef();
    const password = useRef();

    async function handleLogin(){
        setLoading(true);
        try{
            await login(email.current.value, password.current.value);
        } catch (error){
            console.log("error caguth");
        }
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