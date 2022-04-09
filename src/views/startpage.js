
function Startpage({text, changeText}) {
    return (
        <div>
            <p>{text} </p>
            <div>
                <input type="text" onInput={function (e) { e.target.value === "" ? changeText("Please type something :)") : changeText(e.target.value);}}/>
            </div>
        </div>
        );
}

export default Startpage;