import React, { useState } from "react";
import { useEffect } from "react";
import currModel from '../Models/model';
import Startpage from '../views/startpage';

function StartpagePresenter() {
    const [text, changeText] = useState(currModel.text);

    useEffect(function () {
        function observer() { changeText(currModel.text); }
        currModel.addObserver(observer);
        return function () { currModel.removeObserver(observer);}
    }, []);

    return <Startpage text={text} changeText={(newText) => currModel.changeText(newText)}/>
}

export default StartpagePresenter;