
function Startpage({text, changeText, gotoAnPage}) {
    return (
        <div>
            <div><h1> DummyApp1 :) </h1></div>
            <p>{text} </p>
            <div>
                <input type="text" onInput={function (e) { e.target.value === "" ? changeText("Please type something :)") : changeText(e.target.value);}}/>
            </div>
            <div>
                <button onClick={e => gotoAnPage()}>go to another page</button>
            </div>
        </div>
        );
}

export default Startpage;