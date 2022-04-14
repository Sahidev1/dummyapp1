import RegisterView from "../views/registerview";
import { signUp, useAuth } from "../firebase";
import React, {useEffect, useRef, useState} from "react"
import { async } from "@firebase/util";

// loading state doesnt work
function SignUpViewPresenter (){
    const [loading, setLoading] = useState(false);
    const [signUpReq, setSignUpReq] = useState(false);
    const currentUser = useAuth();

    const email = useRef();
    const password = useRef();

    function loadStatus (bool){
        setLoading(bool);
        console.log(loading);
    }

    async function handleSignup(){
        try {
            await signUp(email.current.value, password.current.value);
        } catch (e){
            console.error(e);
        }
    }

    

    async function handleLogOut(){
        
    }

    return <RegisterView mailRef={email} passRef={password}
     loading={loading} signUp={handleSignup} user={currentUser}/>
}

export default SignUpViewPresenter;