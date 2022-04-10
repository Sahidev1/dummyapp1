import AnotherPage from '../views/anotherpage'
import React, { useState } from "react";

/**
 * Component that doesn't use any models
 * */
function AnotherPagePresenter() {
    const [list, updateList] = useState(['hello', 'well', 'bye then']);

    const addToList = (input)=> {
        let tempList = [...list, input];
        updateList(tempList);
    }

    const popFromList = ()=> {
        let newArr = list.filter((element, index) => index !== list.length - 1);
        updateList(newArr);
    }

    return <AnotherPage list={list} addToList={addToList} popFromList={popFromList}/>
}

export default AnotherPagePresenter;