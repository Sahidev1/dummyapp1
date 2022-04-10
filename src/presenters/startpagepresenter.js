import React, { useState } from "react";
import { useEffect } from "react";
import currModel from '../Models/model';
import Startpage from '../views/startpage';
import { useNavigate } from 'react-router-dom';

function StartpagePresenter() {
    const [text, changeText] = useState(currModel.text);

    useEffect(function () {
        function observer() { changeText(currModel.text); }
        currModel.addObserver(observer);
        return function () { currModel.removeObserver(observer);}
    }, []);

    const navigate = useNavigate();
    const gotoAnotherPage = () => navigate('/anotherpage');

    return <Startpage text={text} changeText={(newText) => currModel.changeText(newText)}
        gotoAnPage={gotoAnotherPage} />
}

export default StartpagePresenter;