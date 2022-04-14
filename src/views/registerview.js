
function RegisterView ({mailRef, passRef, signUp, loading, user}){
    return (
        <div id="fields">
            <div>
                {user?.email}
            </div>
            <div>
               Email <input ref={mailRef} type="text"/>
            </div>
            <div>
                 Pass <input ref={passRef} type="password"/> 
            </div>
            <button disabled={/*user ||*/ loading} onClick={e => {signUp()}}>Sign Up</button>
            <button disabled={!user} onClick={e => console.log("hi")}>log out</button>
        </div>
    );
}

export default RegisterView