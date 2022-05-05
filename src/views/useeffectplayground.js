
function UseEffectPlayGround ({val, changeVal, refStr, setStr, changeNr}){
    return (
        <div>
            <div>{val}</div>
            <div><button onClick={e => changeVal(val + 1)}>button</button></div>
            <div><input type="text" ref={refStr}/></div>
            <div><button onClick={e => setStr()}>submit string</button></div>
        </div>
    );
}

export default UseEffectPlayGround;