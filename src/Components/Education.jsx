import React from 'react';
import {Col, Row} from "antd";

const Education = () => {
    return(
        <Row className="education">
            <Col md={{span: 12}} sm={{span: 7}}>
               <div style={{marginBottom: "30px"}}>
                   <h2>Masters in Software Engineering</h2>
                   <h4>Concordia University, Canada</h4>
                   <p>2019-2021</p>
               </div>
               <div>
                   <h2>Bachelors of Technology</h2>
                   <h4>Nagpur University, India</h4>
                   <p>2012-2016</p>
               </div>
            </Col>
            <Col md={{span: 12}} sm={{span: 7}}>
                <img src="education.gif"/>
            </Col>
        </Row>
    );
}

export default Education;