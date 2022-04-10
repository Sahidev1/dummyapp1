
let newListItem = "";
function AnotherPage({ list, addToList, popFromList }) {
    return (
        <div>
            {
                list.map(
                    function (x) {
                        return (
                            <div key={x.toString()}> {"list element:" + x} </div>
                            );
                    }
                )
            }
            <div>
                <input id="input0" type="txt" onInput={e => { newListItem = e.target.value }} />
                <button onClick={e => { newListItem.length === 0? console.log("empty"):addToList(newListItem); }}>Add to list</button>
                <button onClick={e => popFromList()}>Pop from List </button>
            </div>
        </div>
        );
}

export default AnotherPage;