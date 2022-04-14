
function LoginView ({emailRef, passRef, user, handleLogin}){
    return (
    <div>
        <div>{user?.email}</div>
        <div>
            email: <input type="text" ref={emailRef}/>
        </div>
        <div>
            password: <input type="text" ref={passRef}/>
        </div>
        <button onClick={e => handleLogin()}></button>
    </div>);
}

export default LoginView;