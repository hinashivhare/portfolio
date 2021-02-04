import React from 'react';
import {Row, Col} from 'antd';

const Experience = () => {
    return (
        <div className= "experience_heading">
            <Row className="experience_heading_1">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Elanco - Farm Animal</h1>
                    <h3 className="experience_heading_date">Feb 2019 - May 2019</h3>
                    <h3>Responsibilities</h3>
                   <li> Requirement specification analysis, development, and unit testing</li>
                    <li>Translated designs and requirements into high-quality code and build component libraries for future use.</li>
                    <li>Created Components build in ReactJS.</li>
                    <li>Implemented enhancements that improved web functionality.</li>
                    <p>Technologies Used</p>
                    <span>ReactJs</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>git-hub</span>
                    <span>Agile</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="Elanco.png"/>
                </Col>
            </Row>
            <Row className="experience_heading_2">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Infosys Internal Projects</h1>
                    <h3 className="experience_heading_date">Apr 2018 - Jan 2019</h3>
                   <p>
                       In Infosys, I was working on two internal projects along with intensive training in ReactJS and Redux.
                       The first project was on Point of Sale (POS) system. Our goal was to provide a fast and fantastic “store checkout” experience toour users based on their needs and regular feedback.
                       While the second was an internal dashboard web app using Reactjs, HTML, CSS, ant-design.
                   </p>
                    <h3>Responsibilities</h3>
                    <li>Executed unit testing as required.</li>
                    <li>Analyzed business requirements and built a responsive website</li>
                    <li>Implemented JavaScript, AJAX to develop a highly responsive interface and provide dynamic functionality</li>
                    <li>Supervised end-to-end coordination with offshore clients and extensively worked in an Agile team</li>
                    <p>Technologies Used</p>
                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>git-hub</span>
                    <span>Ant-Design</span>
                    <span>JIRA</span>
                    <span>Agile</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="internalProjects.gif"/>
                </Col>
            </Row>
            <Row className="experience_heading_3"  gutter={1} justify="center">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Inmarsat - A Satellite Telecommunication Company</h1>
                    <h3 className="experience_heading_date">Jun 2017 - Mar 2018</h3>
                    <p>
                        As part of this INMARSAT project, we were supposed to work on different components in
                        order to provide telecommunication to all the three areas land,
                        water and air with the help of Satellite.
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
                    <span>Agile</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="InmarsatLogo.png"/>
                </Col>
            </Row>
            <Row className="experience_heading_4">
                <Col md={{span: 12}} sm={{span: 6}}>
                    <h1>Belgacom Proximus</h1>
                    <h3 className="experience_heading_date">Oct 2016 - May 2017</h3>
                    <h3> Domain: Telecom. Functional Testing.</h3>
                    <p>
                        As part of this BELGACOM project, we were supposed to work on different kind of Telecom
                        Item and plan Proximus provide to its user.It was a project to provide, cease, migrate,
                        change and move the item and then tracking it and generating invoice and billing
                        documents for the order via PEGA.
                        Responsibilities:
                    </p>
                    <h3>Responsibilities</h3>
                    <li>Lead designer of test cases and test analyst</li>
                    <li>Creating groovy scripts for progression and regression test cases.</li>
                    <li>Providing design solutions due to intense telecom domain knowledge.</li>
                    <li>Epic Owner of various critical modules</li>
                    <li>Have strong technical skills, both functional and non-functional, manual and automation,
                        ideally in a continuous delivery environment
                    </li>
                    <p> Technologies Used</p>
                    <span>SOAP UI</span>
                    <span>PEGA</span>
                    <span>CPQ</span>
                    <span>Waterfall</span>
                </Col>
                <Col md={{span: 12}} sm={{span: 8}}>
                    <img src="Proximus.svg"/>
                </Col>
            </Row>
        </div>
    );
}

export default Experience