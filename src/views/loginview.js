
function LoginView (){
    return (
    <div>
        <div>
            email: <input type="text" onChange={e => console.log("change")}/>
        </div>
        <div>
            password: <input type="text" onChange={e => console.log("passchange")}/>
        </div>
    </div>);
}

export default LoginView;