import { useEffect, useRef, useState } from "react";
import currModel from "../Models/model";
import UseEffectPlayGround from "../views/useeffectplayground"

function UseEffectPresenter (){
    console.log("render");

    const strVal = useRef()


    const [stringVal, setStringVal] = useState("");
    const [value, setValue] = useState(0);

    const [windWitdh, setWindWidth] = useState(window.innerWidth);

    const handleResize = () => setWindWidth (window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    },[])

    useEffect(()=> {
        console.log("useffect call")
    })

    useEffect(() => {
        console.log("listener activated")
    },[stringVal])


    useEffect(() => {
        console.log("onMount");
        document.addEventListener('keyup',e => {if(e.key === "Enter"){
            setString();
        }});
        return document.removeEventListener('keyup ',e => {if(e.key === "Enter"){
            setString();
        }});
    },[])

    const setString = () => setStringVal(strVal.current.value)

    return <div>{windWitdh}<UseEffectPlayGround val={value} changeNr={currModel
    .changeNr}
    refStr={strVal}  changeVal={setValue} setStr={setString} /></div>
}

export default UseEffectPresenter;