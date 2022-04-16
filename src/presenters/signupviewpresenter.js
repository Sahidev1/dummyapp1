import RegisterView from "../views/registerview";
import { logOut, signUp, useAuth, auth } from "../firebase";
import React, { useRef, useState} from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// loading state doesnt work
function SignUpViewPresenter (){
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();

    const email = useRef();
    const password = useRef();

    /*async function handleSignup(){
        setLoading(true);
        try {
            await signUp(email.current.value, password.current.value);
        } catch (error){
            console.log(error)
        }
        setLoading(false);
    }*/

    function handleError (error){
        error = error.toString();
        if (error === 'FirebaseError: Firebase: Error (auth/email-already-in-use).') {
            alert ("Account already exists!");
        }
    }

    function handleSignup (){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then(console.log("success"))
        .catch(e => handleError(e.toString()));
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