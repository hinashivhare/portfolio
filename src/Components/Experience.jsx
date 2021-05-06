import React from 'react';
import {Row, Col} from 'antd';

const Experience = () => {
    return (
        <div className= "experience_heading">
            <Row className="experience_heading_1">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Elanco - Farm Animal</h1>
                    <h3 className="experience_heading_date">Jan 2019 - May 2019</h3>
                    <h3>Responsibilities</h3>
                   <li>Contributed to every step of product development from prototyping to depl</li>
                    <li>Translated designs and requirements into reusable components using React and Redux</li>
                    <li>Implemented enhancements that improved web functionality and reduced page size.</li>
                    <li>Implemented unit tests using jest-enzyme and improved code coverage</li>
                    <p>Technologies Used</p>
                    <span>ReactJs</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Redux</span>
                    <span>Git-hub</span>
                    <span>JIRA</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="Elanco.png"/>
                </Col>
            </Row>
            <Row className="experience_heading_2">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Infosys Retail POS system</h1>
                    <h3 className="experience_heading_date">Jan 2018 - Dec 2018</h3>
                   <p>
                       I helped build interactive UI features for one of Infosys's most used retail POS solutions. I worked on the
                       loyalty program integration within the checkout 􀆙ow.
                   </p>
                    <h3>Responsibilities</h3>
                    <li>Partnered with the back-end team to implement features using RESTful APIs.</li>
                    <li>Analyzed business requirements and built a responsive website</li>
                    <li>Refactored features built in Angular 1 and moved them to React Redux</li>
                    <li>Actively worked on improving code documentation to make it more intuitive to read</li>
                    <li>Worked on existing selenium testing framework and implemented integration tests.</li>
                    <li>Supervised end-to-end coordination with offshore clients and extensively worked in an Agile team.</li>
                    <p>Technologies Used</p>
                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>git-hub</span>
                    <span>JIRA</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="internalProjects.gif"/>
                </Col>
            </Row>
            <Row className="experience_heading_3">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Infosys - Feedback Tool</h1>
                    <h3 className="experience_heading_date">May 2017 - Dec 2017</h3>
                    <p>
                        I worked on employee recognition and feedback tool. The tool helped managers give quarterly feedback to
                        their employees based on the company values. The tool helped improve engagement, spur productivity,
                        and helped employees recognize areas of improvement.
                    </p>
                    <p> Technologies Used</p>
                    <span>Javascript</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JQuery</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="infosys.jpeg"/>
                </Col>
            </Row>
            <Row className="experience_heading_4"  gutter={1} justify="center">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Inmarsat - A Satellite Telecommunication Company</h1>
                    <h3 className="experience_heading_date">Sept 2016 - April 2017</h3>
                    <p>
                        As part of this Inmarsat project, I worked on different components which provide telecommunication to
                        all three areas of land, water, and air with the help of satellites
                    </p>
                    <h3>Responsibilities</h3>
                    <li>Lead designer of test cases and Creating Scripts for Automation Testing.</li>
                    <li>Sandbox- Salesforce Sigma CPQ Testing.</li>
                    <li>Component Owner.</li>
                    <li>Analysis of requirements of POs and testing requirements.</li>
                    <li>Managing a complete team of testers in Sigma CPQ.</li>
                    <p>Technologies Used</p>
                    <span>Selenium</span>
                    <span>AWS</span>
                    <span>Salesforce</span>
                    <span>JIRA</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="InmarsatLogo.png"/>
                </Col>
            </Row>
        </div>
    );
}

export default Experience