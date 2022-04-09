
function Startpage({text, changeText}) {
    return (
        <div>
            <p>{text} </p>
            <div>
                <input type="text" onInput={e => changeText(e.target.value)}/>
            </div>
        </div>
        );
}

export default Startpage;