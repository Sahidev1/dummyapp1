import { onValue, ref } from "firebase/database";
import { useEffect, useRef, useState } from "react";
import { db } from "../firebase";
import { deviceModel } from "../Models/devicemodel";
import DeviceView from "../views/deviceview";

async function getDevState (){
    try {
        await deviceModel.getCurrentDeviceState();
        console.log(deviceModel.LED2_State)
    } catch (err){
        console.error("error")
    }
}

function arrToString (arr){
    let str = "[";
    arr.forEach((el,index) => {
        if (index === arr.length - 1){
            str += el.toString() 
        }
        else {
            str += el.toString() + ",";
        }
    });
    str += "]";
    return str;
}

export default function DevicePresenter (){
    const [powerState, setPowerState] = useState(deviceModel.powerState);
    const [led1State, setLed1State]  = useState(deviceModel.LED1_State);
    const [led2State, setLed2State] = useState(deviceModel.LED2_State);

    const arrIndex0 = useRef();
    const arrIndex1 = useRef();

    useEffect(() => {
        function observer0 (){
            setPowerState(deviceModel.powerState)
        }
        function observer1 (){
            setLed1State(deviceModel.LED1_State)
        }
        function observer2 (){
            setLed2State(deviceModel.LED2_State)
        }
        const observers = [observer0, observer1, observer2];
        observers.forEach (obs => deviceModel.addObserver(obs));
        return function (){
            observers.forEach(obs => deviceModel.removeObserver(obs));
        }
    }, [])

    deviceModel.getCurrentDeviceState();

    let reqArr = [0,0];
    const sendReq = () => {
        reqArr[0] = arrIndex0.current.value;
        reqArr[1] = arrIndex1.current.value;
        deviceModel.sendOverwriteReq(arrToString(reqArr))
        console.log(arrToString(reqArr))
    }

    return (
        <DeviceView power={powerState} LED1={led1State} LED2={led2State} setArr={sendReq} ref0={arrIndex0}
        ref1={arrIndex1}/>
    );
}