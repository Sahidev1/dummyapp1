import RegisterView from "../views/registerview";
import { logOut, signUp, useAuth } from "../firebase";
import React, {useEffect, useRef, useState} from "react"
import { async } from "@firebase/util";

// loading state doesnt work
function SignUpViewPresenter (){
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const email = useRef();
    const password = useRef();

    async function handleSignup(){
        setLoading(true);
            await signUp(email.current.value, password.current.value);
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

    return <RegisterView mailRef={email} passRef={password}
     loading={loading} signUp={handleSignup} logout={handleLogOut} user={currentUser}/>
}

export default SignUpViewPresenter;