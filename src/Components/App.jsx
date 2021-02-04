import React from 'react';
import Header from "./Header";
import {Row} from "antd";
import '../App.css'
import 'antd/dist/antd.css';
import Router from "./Router";

const App = () => {
    return(
        <div className="container">
            <Header/>
            <Router/>
        </div>
    );
};

export default App;
