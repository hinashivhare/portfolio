import React from 'react';
import Header from "./Header";
import {Row} from "antd";
import '../App.css'
import 'antd/dist/antd.css';
import Router from "./Router";
import ScreenScroll from "./ScreenScroll"

const App = () => {
    return(
        <div style={{margin: "0 150px 0 150px", padding: "20px"}}>
            <Header/>
            <Router/>
        </div>
    );
};

export default App;
