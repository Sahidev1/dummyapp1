export default function DeviceView ({power, LED1, LED2, setArr: sendReq, ref0, ref1}){
    return (
        <div>
            Power: {power}, LED1: {LED1}, LED2: {LED2}
            <div>
                Set LED1: <input ref={ref0}></input>
            </div>
            <div>
                Set LED2: <input ref={ref1}></input>
            </div>
            <div>
                <button onClick={e => sendReq()}>send Request</button>
            </div>
        </div>
    );
}