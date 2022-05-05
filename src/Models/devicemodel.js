import { child, get, onValue, push, ref, set } from "firebase/database";
import { db } from "../firebase";
import { ObserverModel } from "./observermodel";

const UNKNOWN = "Unknown";
const OFF = "OFF";
const ON = "ON";

class DeviceModel extends ObserverModel{
    constructor(){
        super();
        this.powerState = UNKNOWN;
        this.LED1_State = UNKNOWN;
        this.LED2_State = UNKNOWN;
    }

    setPower (state){
        if (state === ON){
            this.powerState = ON;
        } else if (state === OFF) {
            this.powerState = OFF;
        }
        else {
            console.log("error")
            return;
        }
        this.notifyObservers();
    }

    setLED1 (state){
        if (state === ON){
            this.LED1_State = ON;
        } else if (state === OFF) {
            this.LED1_State = OFF;
        }
        else {
            console.log("error")
            return;
        }
        this.notifyObservers();
    }


    setLED2 (state){
        if (state === ON){
            this.LED2_State = ON;
        } else if (state === OFF) {
            this.LED2_State = OFF;
        }
        else {
            console.log("error")
            return;
        }
        this.notifyObservers();
    }

    sendRequest (requestString){
        const requestQ = ref(db , 'requestQueue');
        const newRequest = push(requestQ);
        set (newRequest, {
            REQUEST: requestString
        });
    }

    sendOverwriteReq (requestString){
        set(ref(db,'requestOverwrite'), {
            REQUEST: requestString
        })
    }

    getCurrentDeviceState (){
        const dbRef = ref(db);
        return get(child(dbRef, 'currentDeviceState')).then ((snapshot) =>{
            if(snapshot.exists){
                const val = snapshot.val();
                this.setPower(val.POWER)
                this.setLED1(val.LED1);
                this.setLED2(val.LED2);
            } else {
                console.log("no such data");
            }
        })
    }
}

export const deviceModel = new DeviceModel();

const dbRef = ref(db, 'currentDeviceState');
// adding listerner which listens for DB changes
onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    deviceModel.setPower(data.POWER);
    deviceModel.setLED1(data.LED1);
    deviceModel.setLED2(data.LED2);
})